import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

interface IContainer {
  danger: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  max-width: 28.125rem;

  background: #fff;
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 1.375rem;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )}
  }

  p {
    margin-top: .5rem;
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 1rem;
    margin-right: .5rem;
    color: ${({ theme }) => theme.colors.gray[200]};
    transition: all .2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.gray[900]};

    }
  }
`;
