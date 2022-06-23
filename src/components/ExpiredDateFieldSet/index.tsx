import React, { useEffect } from 'react';
import useInputValue from '../../hooks/useInputValue';
import FieldSet from '../FieldSet';
import ExpiredDateInput from '../Input/ExpiredDateInput';
import {
  checkExpiredMonth,
  checkExpiredYear,
  checkNumberOnly,
  checkExpiredDate,
} from '../../validation';
import { ACTION, useCardFormContext } from '../../context/card-form-context';

const ExpiredDateFieldSet = () => {
  const { dispatch, state } = useCardFormContext();
  const [expiredMonth, isExpiredMonthError, onChangeExpiredMonth] =
    useInputValue({
      isValidateInput: checkExpiredMonth,
      isInputAvailableValue: checkNumberOnly,
    });
  const [expiredYear, isExpiredYearError, onChangeExpiredYear] = useInputValue({
    isValidateInput: checkExpiredYear,
    isInputAvailableValue: checkNumberOnly,
  });

  useEffect(() => {
    const isError =
      isExpiredMonthError ||
      isExpiredYearError ||
      !checkExpiredDate(expiredYear, expiredMonth);
    if (!state.isExpiredDateError && isError)
      dispatch({ type: ACTION.SET_EXPIRED_DATE_ERROR });
  }, [
    state,
    dispatch,
    isExpiredMonthError,
    isExpiredYearError,
    expiredMonth,
    expiredYear,
  ]);

  useEffect(() => {
    if (
      expiredMonth.length <= 0 ||
      expiredYear.length <= 0 ||
      isExpiredMonthError ||
      isExpiredYearError
    )
      return;

    dispatch({
      type: ACTION.SET_EXPIRED_DATE,
      data: { expiredMonth, expiredYear },
    });
  }, [
    expiredMonth,
    expiredYear,
    isExpiredMonthError,
    isExpiredYearError,
    dispatch,
  ]);

  return (
    <FieldSet
      id="expiredNumber"
      description="만료일"
      errorMessage="유효한 만료 숫자를 입력하세요"
      isError={
        isExpiredMonthError ||
        isExpiredYearError ||
        !checkExpiredDate(expiredYear, expiredMonth)
      }
    >
      {
        <ExpiredDateInput
          expiredMonth={expiredMonth}
          expiredYear={expiredYear}
          onChangeExpiredMonth={onChangeExpiredMonth}
          onChangeExpiredYear={onChangeExpiredYear}
        />
      }
    </FieldSet>
  );
};

export default ExpiredDateFieldSet;
