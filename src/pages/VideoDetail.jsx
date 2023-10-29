import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import timeAgo from "../util/timeago";
import ChannelInfo from "../components/ChannelInfo";
import ChannelVideos from "../components/ChannelVideos";
import CommentList from "../components/CommentList";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, description, channelTitle, channelId, publishedAt } =
    video.snippet;

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-x-5 mt-7">
        <div className="flex flex-col gap-5 basis-9/12">
          <iframe
            className="rounded-2xl"
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title="video"
          />
          <h3 className="text-xl font-bold">{title}</h3>
          <ChannelInfo channelTitle={channelTitle} channelId={channelId} />
          <pre className="p-10 bg-gray-200 text-md rounded-3xl">
            <p className="text-sm opacity-70">{timeAgo(publishedAt)}</p>
            {description}
          </pre>
          <CommentList videoId={video.id} />
        </div>
        <ChannelVideos channelId={channelId} />
      </div>
    </section>
  );
}
