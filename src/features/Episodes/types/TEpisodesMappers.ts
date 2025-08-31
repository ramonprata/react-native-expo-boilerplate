import { IEpisodeDto, IEpisodeView } from "./IEpisode";

export type TEpisodesMappers = {
  getEpisodes: {
    transform: (episodes: IEpisodeDto[]) => IEpisodeView[];
  };
};
