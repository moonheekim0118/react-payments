import PropTypes from 'prop-types';
import * as styled from './index.styled';

const LinkButton = ({ children, ...rest }) => {
  return <styled.Container {...rest}>{children}</styled.Container>;
};

LinkButton.propTypes = {
  children: PropTypes.string,
};

export default LinkButton;
