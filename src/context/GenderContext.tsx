"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type DashboardType = "men" | "women";

type GenderContextType = {
  currentDashboard: DashboardType;
  setCurrentDashboard: (dashboard: DashboardType) => void;
};

const GenderContext = createContext<GenderContextType | undefined>(undefined);

export function GenderProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentDashboard, setCurrentDashboard] =
    useState<DashboardType>("men");

  return (
    <GenderContext.Provider
      value={{
        currentDashboard,
        setCurrentDashboard,
      }}
    >
      {children}
    </GenderContext.Provider>
  );
}

export function useGender() {
  const context = useContext(GenderContext);

  if (!context) {
    throw new Error(
      "useGender must be used inside GenderProvider"
    );
  }

  return context;
}