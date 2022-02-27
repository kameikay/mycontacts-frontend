import React from 'react';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export default function EditContact() {
  return (
    <>
      <PageHeader title="Editar Victor K." />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
