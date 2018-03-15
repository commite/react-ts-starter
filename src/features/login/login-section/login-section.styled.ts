import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem;
  border: 1px solid lightgray;
  border-radius: .5rem;
`;