import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="w-full flex p-6 border-b-2 border-gray-300">
      <Link to="/" className="flex items-center gap-x-1 ">
        <BsYoutube className="text-red-600 text-3xl" />
        <h3 className="text-2xl font-bold">Youtube</h3>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-center gap-2"
      >
        <input
          className="w-5/12 px-3 border rounded-md outline-none"
          type="text"
          value={text}
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-gray-500 p-3 rounded-md text-white text-md">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
