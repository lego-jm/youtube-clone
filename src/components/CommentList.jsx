import React from "react";
import { useQuery } from "react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function CommentList({ videoId }) {
  const { youtube } = useYoutubeApi();
  const { data: comments } = useQuery(
    ["comments", videoId],
    () => youtube.commentList(videoId),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <ul className="flex flex-col gap-y-5">
      <h3 className="font-bold text-xl">댓글 {comments?.length}개</h3>
      {comments?.map((comment) => (
        <li key={comment.id} className="flex items-center gap-x-2">
          <a
            href={comment.snippet.topLevelComment.snippet.authorChannelUrl}
            target="_blank"
          >
            <img
              className="rounded-full w-10 h-10 cursor-pointer"
              src={
                comment.snippet.topLevelComment.snippet.authorProfileImageUrl
              }
              alt=""
            />
          </a>
          <div className="">
            <h3 className="text-sm font-bold">
              {comment.snippet.topLevelComment.snippet.authorDisplayName}
            </h3>
            <pre className="text-sm">
              {comment.snippet.topLevelComment.snippet.textOriginal}
            </pre>
          </div>
        </li>
      ))}
    </ul>
  );
}
