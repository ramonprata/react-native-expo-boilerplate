import Constants from "expo-constants";
import { FetchHttpClient } from "../../base";
import { STORIES_API_URL, STORYBLOK_API } from "./config";

export class CMSApi {
  private static instance: CMSApi;
  private storyblokApi: FetchHttpClient;

  private constructor() {
    this.storyblokApi = FetchHttpClient.getInstance({
      baseURL: STORYBLOK_API,
    });
  }

  public static getInstance(): CMSApi {
    if (!CMSApi.instance) {
      CMSApi.instance = new CMSApi();
    }
    return CMSApi.instance;
  }

  public async getStories<T>(params: Record<string, unknown> = {}) {
    return this.storyblokApi.get<T>(
      `${STORIES_API_URL}?token=${Constants.expoConfig?.extra?.storyblokApiToken}`,
      params
    );
  }
}
const cmsInstance = CMSApi.getInstance();

export default cmsInstance;
