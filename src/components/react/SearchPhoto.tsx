import type { SanityDocument } from "@sanity/client";
import React, { useState, type ChangeEvent } from "react";
import Fuse from "fuse.js";

interface SearchPhotoProps {
  searchList: SanityDocument[];
}

const options = {
  keys: ["title", "author", "slug.current"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function SearchPhoto({ searchList }: SearchPhotoProps) {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);
  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 10);

  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  return (
    <>
      <label>Search</label>
      <input
        type="text"
        value={query}
        onChange={handleOnSearch}
        placeholder="Search posts"
      />
      {query.length > 1 && (
        <p>
          Found {posts.length} {posts.length === 1 ? "result" : "results"} for '
          {query}'
        </p>
      )}
      <ul>
        {posts &&
          posts.map((post) => (
            <li>
              <a href={`/${post.slug}`}>{post.title}</a>
              {post.description}
            </li>
          ))}
      </ul>
    </>
  );
}

export default SearchPhoto;
