"use client";
import AppHeaderFullPage from "@/layout/AppHeaderFullPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

export default function FullWidthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minuto
        refetchOnWindowFocus: false,
      },
    },
  }));

  return <div>
    <QueryClientProvider client={queryClient}>
      <AppHeaderFullPage  />
      {children}
    </QueryClientProvider>
  </div>;
}
