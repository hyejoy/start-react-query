import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchPosts, deletePost, updatePost } from "./api";
import { PostDetail } from "./PostDetail";
const maxPostPage = 10;

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  // replace with useQuery
  /**
   * 쿼리 기능에 대해 말하자면, 어떤 데이터를 가져올지 알 수 있도록
   * 쿼리를 사용하는 몇가지 옵션을 추가해야함. *순서는 중요하지않음
   * 1. 쿼리키 : 쿼리 캐시 내에서 데이터를 정의하는 요소
   *  - 쿼리키는 항상 배열, v4이상부터는 배열임
   * 2. 쿼리함수 : 데이터를 가져오기 위해 실행할 함수
   */
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (!data) return <div>Loading</div>;

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
