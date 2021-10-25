import React from "react";
import { useQuery } from "react-query";

const getLeagues = async () =>
  (await fetch(`https://api.datdota.com/api/leagues`)).json();

export const Leagues: React.VFC = () => {
  const { isLoading, isError, data, error } = useQuery(`leagues`, getLeagues);
  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error: {(error as Error).message}</>;
  }
  return <>{JSON.stringify(data, null, 2)}</>;
};
