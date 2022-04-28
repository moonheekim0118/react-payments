import React from "react";
import FieldSet from "../../FieldSet";
import styled from "styled-components";
import Input from "../../Input";
import PropTypes from "prop-types";

const showOwnerNameLength = (ownerName) => {
  return ownerName.length < 10
    ? `0${ownerName.length}/30`
    : `${ownerName.length}/30`;
};

const CardOwnerName = ({ ownerName, onChangeOwnerName, isError }) => {
  return (
    <Container>
      <MaxNumberIndicator>{showOwnerNameLength(ownerName)}</MaxNumberIndicator>
      <FieldSet
        id="cardOwnerName"
        description="카드 소유자 이름(선택)"
        errorMessage="이름은 30자 이하의 영문이어야 합니다."
        isError={isError}
      >
        {
          <Input
            id="cardOwnerName"
            scale="large"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            value={ownerName}
            onChange={onChangeOwnerName}
          />
        }
      </FieldSet>
    </Container>
  );
};

CardOwnerName.propTypes = {
  ownerName: PropTypes.string,
  onChangeOwnerName: PropTypes.func,
  isError: PropTypes.bool,
};

const Container = styled.div`
  padding-top: 30px;
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const MaxNumberIndicator = styled.span`
  font-size: 12px;
  position: absolute;
  top: 35px;
  right: 20px;
`;

export default CardOwnerName;
