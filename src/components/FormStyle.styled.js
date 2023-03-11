import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #F33A6A;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const Input = styled.input`
border: 2px solid #F33A6A;
border-radius: 5px;
`;
