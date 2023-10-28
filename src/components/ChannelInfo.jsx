import React from "react";
import { useQuery } from "react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ channelTitle, channelId }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["url", channelId],
    () => youtube.channelImageUrl(channelId),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <div className="flex items-center gap-x-2">
      <img className="w-10 h-10 rounded-full" src={url} alt="" />
      <h3 className="font-bold text-md">{channelTitle}</h3>
    </div>
  );
}
