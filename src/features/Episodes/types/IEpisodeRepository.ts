import { IEpisodeDto } from "./IEpisode";

export interface IEpisodeRepository {
  fetchEpisodes(): Promise<IEpisodeDto[]>;
}
