"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

type LoadingContextType = {
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

export function LoadingProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [loading, setLoading] = useState(false);

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };

  const value = useMemo(
    () => ({
      loading,
      showLoader,
      hideLoader,
    }),
    [loading]
  );

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error(
      "useLoading must be used inside LoadingProvider"
    );
  }

  return context;
}