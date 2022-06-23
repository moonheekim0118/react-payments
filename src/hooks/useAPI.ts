import { useState } from 'react';
import { TApiMethod } from '../types';

interface Props {
  uri: string;
  method: TApiMethod;
}

const useAPI = <T>({ uri, method }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState<T | undefined>();

  const apiRequest = async (options = {}) => {
    try {
      setIsLoading(true);
      const initialResponse = await fetch(uri, { method, ...options });
      const data = await initialResponse.json();

      setResponse(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };
  return { apiRequest, response, isLoading, isError };
};

export default useAPI;
