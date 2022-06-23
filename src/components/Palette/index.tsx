import React from 'react';
import ColorPicker from './ColorPicker';
import * as Styled from './index.styled';
import { CARD_TYPE } from '../../constant';
import { TCard } from '../../types';
import { useCardFormContext, ACTION } from '../../context/card-form-context';

const CARD_LIST1: TCard[] = ['롯데카드', '삼성카드', 'NH농협카드', '신한카드'];
const CARD_LIST2: TCard[] = ['현대카드', '하나카드', 'BC카드', 'KB국민카드'];

interface Props {
  closeModal: () => void;
}

const Palette = ({ closeModal }: Props) => {
  const { dispatch } = useCardFormContext();
  const onClickCardSelector = (name: TCard) => () => {
    dispatch({
      type: ACTION.SET_CARD_TYPE,
      data: { cardType: name },
    });
    closeModal();
  };

  return (
    <Styled.Container>
      <Styled.ColorPickerContainer>
        {CARD_LIST1.map((name) => (
          <ColorPicker
            color={CARD_TYPE[name].color}
            name={name}
            key={name}
            onClick={onClickCardSelector(name)}
          />
        ))}
      </Styled.ColorPickerContainer>
      <Styled.ColorPickerContainer>
        {CARD_LIST2.map((name) => (
          <ColorPicker
            color={CARD_TYPE[name].color}
            name={name}
            key={name}
            onClick={onClickCardSelector(name)}
          />
        ))}
      </Styled.ColorPickerContainer>
    </Styled.Container>
  );
};

export default Palette;
