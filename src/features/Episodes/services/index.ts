import { CMSApi } from "@shared/api";
import episodesMappers from "../utils/mappers";
import { EpisodesManager } from "./EpisodesManager";
import { EpisodesRepository } from "./EpisodesRepository";

const cmspApi = CMSApi.getInstance();
const repository = new EpisodesRepository(cmspApi);

export const episodesManager = new EpisodesManager(repository, episodesMappers);
