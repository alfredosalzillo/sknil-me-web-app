import { useRouter, useSearchParams } from 'next/navigation';
type UseQueryParamsOptions<T> = {
  encoder: (data: T, params: URLSearchParams) => URLSearchParams,
  decoder: (params: URLSearchParams) => T,
};
const useQueryParams = <T>(options: UseQueryParamsOptions<T>) => {
  const navigator = useRouter();
  const params = useSearchParams();
  const state = options.decoder(params);
  const setState = (
    newValue: (T | ((currentValue: T) => T)),
    action: 'push' | 'replace' = 'push',
  ) => {
    const newParams = options
      .encoder(
        typeof newValue === 'function'
          // @ts-ignore
          ? newValue(state)
          : newValue,
        new URLSearchParams(),
      );
    const url = new URL(window.location.href);
    newParams.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
    navigator[action](url.toString());
  };
  return [state, setState] as const;
};

export default useQueryParams;
