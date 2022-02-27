import styled, { css } from 'styled-components';

interface IButton {
  danger?: boolean;
}

export const Button = styled.button<IButton>`
  height: 3.25rem;
  border: none;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: all .2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
    background: ${theme.colors.danger.light};
  }

  &:active {
    background: ${theme.colors.danger.dark};
  }
  `}
`;

Button.defaultProps = {
  danger: false,
};
