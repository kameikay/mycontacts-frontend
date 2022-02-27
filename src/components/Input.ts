import styled, { css } from 'styled-components';

interface IInputProps {
  error?: boolean | undefined;
}

export const Input = styled.input<IInputProps>`
    width: 100%;
    padding: 0 1rem;
    border-radius: .5rem;
    background: #fff;
    border: 2px solid #fff;
    height: 3.25rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    font-size: 1rem;
    transition: border-color .2s ease-in;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
    }

    & + & {
      margin-top: .5rem;
    }

    ${({ theme, error }) => error && css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `}
`;
