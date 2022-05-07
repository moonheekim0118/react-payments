import PropTypes from 'prop-types';
import Label from '../Label/index';
import ErrorMessage from '../ErrorMessage/index';
import * as styled from './index.styled';

const FieldSet = ({ id, description, children, errorMessage, isError }) => {
  return (
    <styled.Container>
      <Label id={id} description={description} />
      {children}
      <styled.ErrorMessageContainer>
        {isError && <ErrorMessage message={errorMessage} />}
      </styled.ErrorMessageContainer>
    </styled.Container>
  );
};

FieldSet.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.element,
  isError: PropTypes.bool,
};

export default FieldSet;
