import React from 'react';
import Label from '../Label/index';
import ErrorMessage from '../ErrorMessage/index';
import * as Styled from './index.styled';

interface Props {
  id: string;
  description: string;
  errorMessage: string;
  isError: boolean;
}

const FieldSet = ({
  id,
  description,
  children,
  errorMessage,
  isError,
}: React.PropsWithChildren<Props>) => {
  return (
    <Styled.Container>
      <Label id={id} description={description} />
      {children}
      <Styled.ErrorMessageContainer>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Styled.ErrorMessageContainer>
    </Styled.Container>
  );
};

export default FieldSet;
