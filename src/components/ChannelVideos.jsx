import React from "react";
import { useQuery } from "react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function ChannelVideos({ channelId }) {
  const { youtube } = useYoutubeApi();
  const { data: videos } = useQuery(
    ["videos", channelId],
    () => youtube.channelList(channelId),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <ul className="basis-3/12">
      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </ul>
  );
}
