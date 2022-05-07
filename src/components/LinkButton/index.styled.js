import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100px;
  height: 44px;
  color: #04c09e;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    color: grey;
  }
`;
