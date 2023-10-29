import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube(client);
export function YoutubeContextProvider({ children }) {
  return (
    <YoutubeContext.Provider value={{ youtube }}>
      {children}
    </YoutubeContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeContext);
}
