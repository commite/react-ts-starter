import styled from 'styled-components';

export const Grid = styled.div``;

export const Label = styled.label`
  font-size: .9rem;
`;

export const Input = styled.input`
  border-radius: .5rem;
  border: 1px solid lightgray;
  padding: .2rem .5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  label {
    margin-bottom: .2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;  
  ${InputContainer}:not(:last-child){
    margin-bottom: .4rem;
  }
`;

export const Button = styled.input`
  border-radius: .5rem;
  border: none;
  padding: .5rem;
  background-color: lightblue;
  color: white;
  align-self: flex-end;
  margin-top: .5rem;
`;