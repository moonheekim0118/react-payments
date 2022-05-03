import Input from '../index';
import PropTypes from 'prop-types';
import * as styled from './index.styled';

const CardNumberInput = ({
  onChangeFirstCardNumber,
  onChangeSecondCardNumber,
  onChangeThirdCardNumber,
  onChangeFourthCardNumber,
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
}) => {
  return (
    <styled.Container>
      <Input
        scale="medium"
        value={firstCardNumber}
        onChange={onChangeFirstCardNumber}
        maxLength={4}
      />
      <styled.DashContainer>-</styled.DashContainer>
      <Input
        scale="medium"
        value={secondCardNumber}
        onChange={onChangeSecondCardNumber}
        maxLength={4}
      />
      <styled.DashContainer>-</styled.DashContainer>
      <Input
        scale="medium"
        type="password"
        value={thirdCardNumber}
        onChange={onChangeThirdCardNumber}
        maxLength={4}
      />
      <styled.DashContainer>-</styled.DashContainer>
      <Input
        scale="medium"
        type="password"
        value={fourthCardNumber}
        onChange={onChangeFourthCardNumber}
        maxLength={4}
      />
    </styled.Container>
  );
};

CardNumberInput.propTypes = {
  onChangeFirstCardNumber: PropTypes.func,
  onChangeSecondCardNumber: PropTypes.func,
  onChangeThirdCardNumber: PropTypes.func,
  onChangeFourthCardNumber: PropTypes.func,
  firstCardNumber: PropTypes.string,
  secondCardNumber: PropTypes.string,
  thirdCardNumber: PropTypes.string,
  fourthCardNumber: PropTypes.string,
};

export default CardNumberInput;
