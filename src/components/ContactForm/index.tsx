import React, { useEffect, useState } from 'react';

import { useErrors } from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';

import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';

import { Form } from './styles';

interface IContactForm {
  buttonLabel: string;
}

interface ICategory {
  id: string;
  name: string;
}

export function ContactForm({ buttonLabel }:IContactForm) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string>('');
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true);

  const {
    setError, getErrorMessageByFieldName, removeError, errors,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();
        setCategories(categoriesList);
      } catch {} finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({
        field: 'email',
        message: 'E-mail inválido',
      });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(event.target.value));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={(event) => handleNameChange(event)}
          error={!!getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(event) => handleEmailChange(event)}
          error={!!getErrorMessageByFieldName('email')}
          type="email"
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => handlePhoneChange(event)}
          maxLength={15}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories}
        >
          <option value="">Sem categoria</option>
          {categories.map((category: ICategory) => (
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
        </Select>
      </FormGroup>

      <Button type="submit" disabled={!isFormValid}>
        {buttonLabel}
      </Button>
    </Form>
  );
}
