import { createContext, useState } from "react";
import type { ReactNode } from "react";

type NoteActive = {
  title: string;
  settitle: (title: string) => void;
  desc: string;
  setdesc: (desc: string) => void;
  id: string | undefined;
  setid: (id: string | undefined) => void;
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
  const [id, setid] = useState<string | undefined>("");

  return (
    <NoteActiveContext.Provider
      value={{ title, settitle, desc, setdesc, id, setid }}
    >
      {children}
    </NoteActiveContext.Provider>
  );
}
