import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 1rem;
  }

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    margin-top: 0.5rem;
    font-size: 0.75rem;
  }

  .form-item {
    position: relative;


    .loader {
      position: absolute;
      top: 18px;
      right: 16px;
    }
  }
`;
