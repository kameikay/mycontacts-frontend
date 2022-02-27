import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 3.25rem;
  border: none;
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
`;
