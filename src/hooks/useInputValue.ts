import { useState } from 'react';

interface Props {
  isValidateInput: (value: string) => boolean;
  isInputAvailableValue: (value: string) => boolean;
}

const useInputValue = ({
  isValidateInput,
  isInputAvailableValue,
}: Partial<Props> = {}) => {
  const [value, setValue] = useState('');
  const [isError, setError] = useState(false);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      isInputAvailableValue &&
      !isInputAvailableValue(value) &&
      value.length !== 0
    )
      return;
    setValue(value);
    if (isValidateInput && !isValidateInput(value)) {
      setError(true);
      return;
    }
    setError(false);
  };

  return [value, isError, onChangeValue] as const;
};

export default useInputValue;
