import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(param) {
    return this.apiClient.get("search", param);
  }
  async popular(param) {
    return this.apiClient.get("videos", param);
  }
  async channelImageUrl(param) {
    return this.apiClient.get("channels", param);
  }
  async channelList(param) {
    return this.apiClient.get("search", param);
  }
  async commentList(param) {
    return this.apiClient.get("commentThreads", param);
  }
}
