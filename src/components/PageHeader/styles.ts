import styled from 'styled-components';

export const Container = styled.header`

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      margin-right: .5rem;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;
