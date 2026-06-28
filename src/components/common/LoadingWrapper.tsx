"use client";

import { useLoading } from "@/context/LoadingContext";
import LoadingOverlay from "./LoadingOverlay";

export default function LoadingWrapper() {
  const { loading } = useLoading();

  return <LoadingOverlay isVisible={loading} />;
}