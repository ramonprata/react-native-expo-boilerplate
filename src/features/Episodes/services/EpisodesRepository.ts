import { CMSApi, CMS_STORIES_DEFAULT_PARAMS } from "@/src/shared/api";
import { IEpisodeDto, IEpisodesResponse } from "../types/IEpisode";
import { IEpisodeRepository } from "../types/IEpisodeRepository";

export class EpisodesRepository implements IEpisodeRepository {
  constructor(private cmsClientApi: CMSApi) {}

  async fetchEpisodes(): Promise<IEpisodeDto[]> {
    const data = await this.cmsClientApi.getStories<IEpisodesResponse>({
      starts_with: CMS_STORIES_DEFAULT_PARAMS.EPISODES.SLUG,
      version: CMS_STORIES_DEFAULT_PARAMS.EPISODES.VERSION,
    });
    return data.stories as unknown as IEpisodeDto[];
  }
}
