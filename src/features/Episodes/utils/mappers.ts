import { IEpisodeDto, IEpisodeView } from "../types/IEpisode";
import { TEpisodesMappers } from "../types/TEpisodesMappers";

const transformEpisodes = (episodes: IEpisodeDto[]): IEpisodeView[] => {
  return episodes.reverse().map((episode) => {
    return {
      id: episode.content._uid,
      ...episode.content,
    };
  });
};

const mappers: TEpisodesMappers = {
  getEpisodes: {
    transform: transformEpisodes,
  },
};

export default mappers;
