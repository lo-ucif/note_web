import { createContext, useState } from "react";
import type { ReactNode } from "react";

type NoteActive = {
  title: string;
  settitle: (title: string) => void;
  desc: string;
  setdesc: (desc: string) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const NoteActiveContext = createContext<NoteActive | undefined>(
  undefined,
);

type UserProviderProps = {
  children: ReactNode;
};

export function NoteProvider({ children }: UserProviderProps) {
  const [title, settitle] = useState<string>("");
  const [desc, setdesc] = useState<string>("");

  return (
    <NoteActiveContext.Provider value={{ title, settitle, desc, setdesc }}>
      {children}
    </NoteActiveContext.Provider>
  );
}
