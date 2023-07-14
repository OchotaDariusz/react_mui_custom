import { useMemo, useRef, useState } from 'react';
import type { AxiosError } from 'axios';
import { toast, type Id as ToastId } from 'react-toastify';

import { axiosInstance } from '../common/axios.config';
import { HttpMethod, TOAST_DEFAULT_CONFIG } from '../common/constants';
import type { RequestConfig, UseFetchReturnType } from '../common/types';

const initialConfig: RequestConfig<any> = {
  url: '',
  method: HttpMethod.GET
};

export const useFetch = <T extends object, U extends object | never = never>(
  config: RequestConfig<U> = initialConfig
): UseFetchReturnType<T, U> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const abortController = useMemo(() => new AbortController(), []);
  const toastIdRef = useRef<ToastId | null>(null);

  const abortExistingRequestIfExists = () => {
    if (abortController !== null) {
      abortController.abort();
    }
  };

  const updateToast = (message: string, type: 'success' | 'error') => {
    if (toastIdRef?.current !== undefined) {
      toast.update(toastIdRef.current as ToastId, {
        render: message,
        type,
        ...TOAST_DEFAULT_CONFIG
      });
    } else {
      toastIdRef.current = toast(message, {
        type,
        ...TOAST_DEFAULT_CONFIG
      });
    }
  };

  const handleOnLoadingStart = () => {
    if (config !== null && typeof config?.onLoadingStart === 'function') {
      config.onLoadingStart();
    }
  };

  const handleOnSuccess = () => {
    if (config !== null && typeof config?.onSuccess === 'function') {
      config.onSuccess();
    }
  };

  const handleOnError = () => {
    if (config !== null && typeof config?.onError === 'function') {
      config.onError();
    }
  };

  const handleOnLoadingEnd = () => {
    if (config !== null && typeof config?.onLoadingEnd === 'function') {
      config.onLoadingEnd();
    }
  };

  const resetHookConfiguration = () => {
    toast.warning('Something went wrong! Please try again.', {
      ...TOAST_DEFAULT_CONFIG
    });
    if (toastIdRef?.current !== undefined) {
      toast.dismiss(toastIdRef.current as ToastId);
    }
    if (data !== null) {
      setData(null);
    }
    if (isLoading) {
      setIsLoading(false);
    }
    if (error !== null) {
      setError(null);
    }
    abortExistingRequestIfExists();
  };

  const dataFetcher = async (data?: U) => {
    const canFetchData = () => {
      return (
        !isLoading ||
        (Boolean(data) && error !== null) ||
        ([HttpMethod.GET, HttpMethod.DELETE].includes(config?.method) && data !== null)
      );
    };

    if (!canFetchData()) {
      console.log('cannot fetch data');
      resetHookConfiguration();
      return;
    }

    try {
      toastIdRef.current = toast.loading(config?.loadingLabel ?? 'Loading...');
      setIsLoading(true);
      handleOnLoadingStart();
      const result = await axiosInstance(config.url as string, {
        ...config,
        data,
        signal: abortController?.signal ?? undefined
      });
      setData(result.data as T);
      setError(null);
      updateToast(config?.successLabel ?? 'Success!', 'success');
      handleOnSuccess();
    } catch (error) {
      setData(null);
      setError(error as AxiosError);
      updateToast(config?.errorLabel ?? 'Something went wrong!', 'error');
      console.error((error as AxiosError).message);
      handleOnError();
    } finally {
      setIsLoading(false);
      handleOnLoadingEnd();
    }
  };

  return { error, isLoading, data, dataFetcher };
};
