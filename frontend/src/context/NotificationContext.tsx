import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type NotificationContextType = {
  active: boolean;
  message: string;
  showNotification: (text: string) => void;
  hideNotification: () => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");

  const showNotification = (text: string) => {
    setMessage(text);
    setActive(true);

    setTimeout(() => {
      setActive(false);
    }, 3000);
  };

  const hideNotification = () => setActive(false);

  return (
    <NotificationContext.Provider
      value={{ active, message, showNotification, hideNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function UseNotification() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error("UseNotification must be used inside NotificationProvider");
  }

  return context;
}
