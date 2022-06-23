import React from 'react';
import * as Styled from './index.styled';
import { TCard } from '../../../types';

interface Props {
  color: string;
  name: TCard;
  onClick: () => void;
}

const ColorPicker = ({ color, name, onClick }: Props) => {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.OptionContainer color={color} />
      <Styled.DescriptionContainer>{name}</Styled.DescriptionContainer>
    </Styled.Container>
  );
};

export default ColorPicker;
