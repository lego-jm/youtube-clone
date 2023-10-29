import React from "react";
import timeAgo from "../util/timeago";
import { useNavigate, useParams } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { videoId } = useParams();
  const { snippet } = video;

  return (
    <li
      className={`w-full cursor-pointer flex ${
        videoId ? "flex-row mb-3" : "flex-col"
      }`}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={`${
          !videoId ? "w-full" : "w-7/12"
        } rounded-xl hover:scale-105 transition-all`}
        src={snippet.thumbnails.high.url}
        alt="youtube_thumbnail"
      />
      <div className={videoId ? "ml-3" : ""}>
        <h3 className="text-sm my-2 h-10 font-semibold line-clamp-2">
          {snippet.title}
        </h3>
        <h3 className="text-xs text-gray-500">{snippet.channelTitle}</h3>
        <p className="text-xs text-gray-500">{timeAgo(snippet.publishedAt)}</p>
      </div>
    </li>
  );
}
