import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Container,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/icons/sad.svg';

import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';
import { Button } from '../../components/Button';

interface IContacts {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  category_name: string | null;
  category_id: string | null;
}

export default function Home() {
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [orderBy, setOrderBy] = useState<string>('asc');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const filteredContacts = useMemo(
    () => contacts.filter(
      (contact: IContacts) => contact.name.toLowerCase()
        .includes(searchTerm.toLowerCase()),
    ),
    [contacts, searchTerm],
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleSearchTerm(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <Container>
      {isLoading && <Loader />}
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato..."
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </InputSearchContainer>

      <Header hasError={hasError}>
        {!hasError && (
        <strong>
          {filteredContacts.length}
          {' '}
          {filteredContacts.length === 1 ? 'contato' : 'contatos'}
        </strong>
        )}

        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
      <ErrorContainer>
        <img src={sad} alt="Sad" />

        <div className="details">
          <strong>Ocorreu um erro ao obter seus contatos!</strong>

          <Button type="button" onClick={() => handleTryAgain()}>
            Tentar novamente
          </Button>
        </div>
      </ErrorContainer>
      )}

      {!hasError
      && (
      <>
        {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
        )}

        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && <small>{contact.category_name}</small>}
              </div>

              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>

              <button type="button">
                <img src={trash} alt="Trash" />
              </button>
            </div>
          </Card>
        ))}
      </>
      )}
    </Container>
  );
}
