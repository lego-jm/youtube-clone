import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get("/videos/search.json");
  }
  async popular() {
    return axios.get("/videos/popular.json");
  }
  async channelImageUrl() {
    return axios.get("/videos/channel.json");
  }
  async channelList() {
    return axios.get("/videos/channelVideos.json");
  }
  async commentList() {
    return axios.get("/videos/commentList.json");
  }
}
