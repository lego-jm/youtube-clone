import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { YoutubeContextProvider } from "./context/YoutubeApiContext";

const client = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeContextProvider>
        <QueryClientProvider client={client}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeContextProvider>
    </>
  );
}

export default App;
