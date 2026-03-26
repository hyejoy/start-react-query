import { Posts } from "./Posts";
import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// 쿼리 클라이언트가 있고, 이를 쿼리 클라이언트 props에 추가해줘야함
const queryClient = new QueryClient();

function App() {
  return (
    // provide React Query client to App
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog &apos;em Ipsum</h1>
        {/* 이제 게시물 컴포넌트 내에서 쿼리 사용호출 가능해짐! */}
        <Posts />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
