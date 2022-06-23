import React from 'react';
import * as Styled from './index.styled';
import { TInputScale } from '../../types';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  scale: TInputScale;
}

const Input = ({ scale, ...rest }: Props) => {
  return <Styled.Container scale={scale} {...rest} />;
};

export default Input;
