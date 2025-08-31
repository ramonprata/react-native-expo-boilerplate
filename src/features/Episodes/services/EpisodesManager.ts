import { sleep } from "@shared/utils";
import { IEpisodeView } from "../types/IEpisode";
import { IEpisodeRepository } from "../types/IEpisodeRepository";
import { TEpisodesMappers } from "../types/TEpisodesMappers";

export class EpisodesManager {
  private repository: IEpisodeRepository;
  private mappers: TEpisodesMappers;

  constructor(_repository: IEpisodeRepository, _mappers: TEpisodesMappers) {
    this.repository = _repository;
    this.mappers = _mappers;
  }

  async getEpisodes(): Promise<IEpisodeView[]> {
    try {
      await sleep(3000);
      const data = await this.repository.fetchEpisodes();
      return this.mappers.getEpisodes.transform(data);
    } catch (error) {
      console.error("Error fetching episodes:", error);
      throw new Error("Failed to fetch episodes.\nPlease try again later.");
    }
  }
}
