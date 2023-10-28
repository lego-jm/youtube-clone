import React from "react";
import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";
import VideoCard from "../components/VideoCard";
import { useParams } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, data: videos } = useQuery(
    ["videos", keyword],
    () => youtube.search(keyword),
    {
      staleTime: 1000 * 60 * 1,
    }
  );

  return (
    <div className="flex justify-center items-center mt-7 mb-20">
      {isLoading && (
        <ClipLoader
          color="#D1190B"
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <ul className="grid grid-col-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
        {videos &&
          videos?.map((video) => <VideoCard key={video.id} video={video} />)}
      </ul>
    </div>
  );
}
