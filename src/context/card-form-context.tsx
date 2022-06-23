import React, { createContext, useContext, useReducer } from 'react';
import { TCard } from '../types';

interface TState {
  firstCardNumber: string;
  secondCardNumber: string;
  thirdCardNumber: string;
  fourthCardNumber: string;
  isInitialCardNumber: boolean;
  isCardNumberError: boolean;
  ownerName: string;
  isInitialOwnerName: boolean;
  isOwnerNameError: boolean;
  secureCode: string;
  isInitialSecureCode: boolean;
  isSecureCodeError: boolean;
  expiredMonth: string;
  expiredYear: string;
  isInitialExpiredDate: boolean;
  isExpiredDateError: boolean;
  firstPassword: string;
  secondPassword: string;
  isInitialPassword: boolean;
  isPasswordError: boolean;
  cardType: TCard;
  isCardTypeSelected: boolean;
}

const initialState: TState = {
  firstCardNumber: '',
  secondCardNumber: '',
  thirdCardNumber: '',
  fourthCardNumber: '',
  isInitialCardNumber: true,
  isCardNumberError: false,
  ownerName: '',
  isInitialOwnerName: true,
  isOwnerNameError: false,
  secureCode: '',
  isInitialSecureCode: true,
  isSecureCodeError: false,
  expiredMonth: '',
  expiredYear: '',
  isInitialExpiredDate: true,
  isExpiredDateError: false,
  firstPassword: '',
  secondPassword: '',
  isInitialPassword: true,
  isPasswordError: false,
  cardType: '',
  isCardTypeSelected: false,
};

const ACTION = {
  SET_CARD_NUMBERS: 'SET_CARD_NUMBERS',
  SET_CARD_NUMBERS_ERROR: 'SET_CARD_NUMBERS_ERROR',
  SET_OWNER_NAME: 'SET_OWNER_NAME',
  SET_OWNER_NAME_ERROR: 'SET_OWNER_NAME_ERROR',
  SET_SECURE_CODE: 'SET_SECURE_CODE',
  SET_SECURE_CODE_ERROR: 'SET_SECURE_CODE_ERROR',
  SET_EXPIRED_DATE: 'SET_EXPIRED_DATE',
  SET_EXPIRED_DATE_ERROR: 'SET_EXPIRED_DATE_ERROR',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_PASSWORD_ERROR: 'SET_PASSWORD_ERROR',
  SET_CARD_TYPE: 'SET_CARD_TYPE',
} as const;

type TActionType =
  | 'SET_CARD_NUMBERS'
  | 'SET_CARD_NUMBERS_ERROR'
  | 'SET_OWNER_NAME'
  | 'SET_OWNER_NAME_ERROR'
  | 'SET_SECURE_CODE'
  | 'SET_SECURE_CODE_ERROR'
  | 'SET_EXPIRED_DATE'
  | 'SET_EXPIRED_DATE_ERROR'
  | 'SET_PASSWORD'
  | 'SET_PASSWORD_ERROR'
  | 'SET_CARD_TYPE';

interface TAction {
  type: TActionType;
  data?: any;
}

const CardFormContext = createContext(initialState);

const cardFormReducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case ACTION.SET_CARD_NUMBERS: {
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
        isInitialCardNumber: false,
        isCardNumberError: false,
      };
    }
    case ACTION.SET_CARD_NUMBERS_ERROR: {
      return { ...state, isCardNumberError: true };
    }
    case ACTION.SET_OWNER_NAME: {
      return {
        ...state,
        ownerName: action.data.ownerName,
        isInitialOwnerName: false,
        isOwnerNameError: false,
      };
    }
    case ACTION.SET_OWNER_NAME_ERROR: {
      return {
        ...state,
        isOwnerNameError: true,
      };
    }
    case ACTION.SET_SECURE_CODE: {
      return {
        ...state,
        secureCode: action.data.secureCode,
        isInitialSecureCode: false,
        isSecureCodeError: false,
      };
    }
    case ACTION.SET_SECURE_CODE_ERROR: {
      return {
        ...state,
        isSecureCodeError: true,
      };
    }
    case ACTION.SET_EXPIRED_DATE: {
      const { expiredMonth, expiredYear } = action.data;
      return {
        ...state,
        expiredMonth,
        expiredYear,
        isInitialExpiredDate: false,
        isExpiredDateError: false,
      };
    }

    case ACTION.SET_EXPIRED_DATE_ERROR: {
      return {
        ...state,
        isExpiredDateError: true,
      };
    }
    case ACTION.SET_PASSWORD: {
      const { firstPassword, secondPassword } = action.data;
      return {
        ...state,
        firstPassword,
        secondPassword,
        isInitialPassword: false,
      };
    }
    case ACTION.SET_PASSWORD_ERROR: {
      return {
        isPasswordError: true,
      };
    }
    case ACTION.SET_CARD_TYPE: {
      return {
        ...state,
        cardType: action.data.cardType,
        isCardTypeSelected: true,
      };
    }
  }
};

interface Props {
  children: React.ReactNode;
}

interface TValue {
  state: TState;
  dispatch: (action: TAction) => void;
}

const CardFormProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cardFormReducer, initialState);

  const value: TValue = { state, dispatch };

  return (
    <CardFormContext.Provider value={value}>
      {children}
    </CardFormContext.Provider>
  );
};

const useCardFormContext = () => {
  const context = useContext(CardFormContext) as TValue;
  return context;
};

export { CardFormProvider, useCardFormContext, ACTION };
