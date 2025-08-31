import { useQuery } from "@tanstack/react-query";
import { episodesManager } from "../services";

export const useEpisodesData = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["episodes"],
    queryFn: () => episodesManager.getEpisodes(),
  });

  return { data, error, isLoading, refetch };
};
