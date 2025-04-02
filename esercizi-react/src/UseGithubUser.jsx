import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGithubUser(username) {
  const shouldFetch = Boolean(username);

  const { data, error, mutate } = useSWR(
    shouldFetch ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    refreshUser: mutate,
  };
}
