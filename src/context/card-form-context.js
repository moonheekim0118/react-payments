import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  firstCardNumber: '',
  secondCardNumber: '',
  thirdCardNumber: '',
  fourthCardNumber: '',
  isCardNumberNotInput: true,
  isCardNumberError: false,
  ownerName: '',
  isOwnerNameNotInput: true,
  isOwnerNameError: false,
  secureCode: '',
  isSecureCodeNotInput: true,
  isSecureCodeError: false,
  expiredMonth: '',
  expiredYear: '',
  isExpiredDateNotInput: true,
  isExpiredDateError: false,
  firstPassword: '',
  secondPassword: '',
  isPasswordNotInput: true,
  isPasswordError: false,
  cardType: {
    color: 'red',
    name: '',
  },
};

const ACTION = {
  CARD_NUMBERS: 'CARD_NUMBERS',
  CARD_NUMBERS_ERROR: 'CARD_NUMBERS_ERROR',
  OWNER_NAME: 'OWNER_NAME',
  OWNER_NAME_ERROR: 'OWNER_NAME_ERROR',
  SECURE_CODE: 'SECURE_CODE',
  SECURE_CODE_ERROR: 'SECURE_CODE_ERROR',
  EXPIRED_DATE: 'EXPIRED_DATE',
  EXPIRED_DATE_ERROR: 'EXPIRED_DATE_ERROR',
  PASSWORD: 'PASSWORD',
  PASSWORD_ERROR: 'PASSWORD_ERROR',
  CARD_TYPE: 'CARD_TYPE',
};

const CardFormContext = createContext(initialState);

const cardFormReducer = (state, action) => {
  switch (action.type) {
    case ACTION.CARD_NUMBERS: {
      const {
        firstCardNumber,
        secondCardNumber,
        thirdCardNumber,
        fourthCardNumber,
      } = action.data;
      return {
        ...state,
        firstCardNumber,
        secondCardNumber,
        thirdCardNumber,
        fourthCardNumber,
        isCardNumberNotInput: false,
        isCardNumberError: false,
      };
    }
    case ACTION.CARD_NUMBERS_ERROR: {
      return { ...state, isCardNumberError: true };
    }
    case ACTION.OWNER_NAME: {
      return {
        ...state,
        ownerName: action.data.ownerName,
        isOwnerNameNotInput: false,
        isOwnerNameError: false,
      };
    }
    case ACTION.OWNER_NAME_ERROR: {
      return {
        ...state,
        isOwnerNameError: true,
      };
    }
    case ACTION.SECURE_CODE: {
      return {
        ...state,
        secureCode: action.data.secureCode,
        isSecureCodeNotInput: false,
        isSecureCodeError: false,
      };
    }
    case ACTION.SECURE_CODE_ERROR: {
      return {
        ...state,
        isSecureCodeError: true,
      };
    }
    case ACTION.EXPIRED_DATE: {
      const { expiredMonth, expiredYear } = action.data;
      return {
        ...state,
        expiredMonth,
        expiredYear,
        isExpiredDateNotInput: false,
        isExpiredDateError: false,
      };
    }

    case ACTION.EXPIRED_DATE_ERROR: {
      return {
        ...state,
        isExpiredDateError: true,
      };
    }
    case ACTION.PASSWORD: {
      const { firstPassword, secondPassword } = action.data;
      return {
        ...state,
        firstPassword,
        secondPassword,
        isPasswordNotInput: false,
      };
    }
    case ACTION.PASSWORD_ERROR: {
      return {
        isPasswordError: true,
      };
    }
    case ACTION.CARD_TYPE: {
      return {
        ...state,
        cardType: action.data.cardType,
      };
    }
  }
};

const CardFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardFormReducer, initialState);

  const value = { state, dispatch };

  return (
    <CardFormContext.Provider value={value}>
      {children}
    </CardFormContext.Provider>
  );
};

const useCardFormContext = () => {
  const context = useContext(CardFormContext);
  return context;
};

CardFormProvider.propTypes = {
  children: PropTypes.element,
};

export { CardFormProvider, useCardFormContext, ACTION };
