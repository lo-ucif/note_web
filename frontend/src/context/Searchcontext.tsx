import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Searchcontexttypetype = {
  text: string;
  settext: (text: string) => void;
};

const SearchContext = createContext<Searchcontexttypetype | undefined>(
  undefined,
);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [text, settext] = useState("");

  return (
    <SearchContext.Provider value={{ text, settext }}>
      {children}
    </SearchContext.Provider>
  );
}

export function Usesearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("usesearch must be used inside SearchProvider");
    throw new Error("UseNotification must be used inside NotificationProvider");
  }

  return context;
}
