import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { fetchPosts, deletePost, updatePost } from "./api";
import { PostDetail } from "./PostDetail";
const maxPostPage = 10;

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ["posts", nextPage],
        queryFn: () => fetchPosts(nextPage),
      });
    }
  }, [currentPage, queryClient]);

  // replace with useQuery
  /**
   * 쿼리 기능에 대해 말하자면, 어떤 데이터를 가져올지 알 수 있도록
   * 쿼리를 사용하는 몇가지 옵션을 추가해야함. *순서는 중요하지않음
   * 1. 쿼리키 : 쿼리 캐시 내에서 데이터를 정의하는 요소
   *  - 쿼리키는 항상 배열, v4이상부터는 배열임
   * 2. 쿼리함수 : 데이터를 가져오기 위해 실행할 함수
   */
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => fetchPosts(currentPage),

    staleTime: 2000, // 2초
  });
  /**
   * isFetching vs isLoading
   * - isFetching : 비동기 쿼리가 해결되지 않았음을 의미한다.
   *    가져오기를 완료하지 않았지만, 가져오기를 수행하는 axios나 graphQL호출 중일수도 있음
   *
   * - isLoading : 불러오기 상태에 있다는것을 의미함
   *    쿼리 함수가 아직 해결되지 않았지만 캐시된 데이터도 없음
   *    쿼리를 한번도 수행한적이 없으므로 가져오는 중이고, 표시할 캐시된 데이터가 없음
   *
   * - 캐시 데이터가 있는 경우와 없는 경우를 구분하는 것!
   */
  if (isFetching) return <h3> isFetching ... 캐시가져오기 진행중?</h3>;

  if (isError) return <h3>{error.toString()}!</h3>;
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
        <button
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        >
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
