import styled from 'styled-components';

export const Container = styled.div`
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 1.5rem;
    background: #fff;
    border: none;
    height: 3.125rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

interface IHeader {
  hasError: boolean;
}

export const Header = styled.header<IHeader>`
  display: flex;
  align-items: center;
  justify-content: ${({ hasError }) => (hasError ? 'flex-end' : 'space-between')};
  margin-top: 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 1rem;

  strong {
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

interface IListHeader {
  orderBy: string;
}

export const ListHeader = styled.header<IListHeader>`
  margin-top: 1.5rem;

    margin-bottom: .5rem;

    button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: .5rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transition: all .2s ease-in-out;
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(0deg)' : 'rotate(180deg)')}
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 1rem;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: .5rem;
      }
    }

    span {
      margin-top: 4px;

      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }

    span + span {
      margin-top: 2px;
    }

  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: .5rem;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  .details {
    margin-left: 1.5rem;

    strong {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors.danger.main};
      display: inline-block;
      margin-bottom: 1rem;
    }
  }

`;
