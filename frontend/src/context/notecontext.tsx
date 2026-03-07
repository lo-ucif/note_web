// import { createContext, useContext, useState, ReactNode } from "react";

// type LastIdContextType = {
//   lastId: number | null;
//   setLastId: React.Dispatch<React.SetStateAction<number | null>>;
// };

// const LastIdContext = createContext<LastIdContextType | undefined>(undefined);

// export function LastIdProvider({ children }: { children: ReactNode }) {
//   const [lastId, setLastId] = useState<number | null>(null);

//   return (
//     <LastIdContext.Provider value={{ lastId, setLastId }}>
//       {children}
//     </LastIdContext.Provider>
//   );
// }

// // export function useLastId() {
// //   const context = useContext(LastIdContext);

// //   if (!context) {
// //     throw new Error("useLastId must be used inside LastIdProvider");
// //   }

// //   return context;
// // }
