"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from "react-toastify";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minuto
        refetchOnWindowFocus: false,
      },
    },
  }));

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen xl:flex">
        {/* Sidebar and Backdrop */}
        {/* <AppSidebar /> */}
        {/* <Backdrop /> */}
        {/* Main Content Area */}
        <div
        // className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
        >
          {/* Header */}
          <AppHeader />
          {/* Page Content */}
          <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
            {children}
          </div>
        </div>
        <ToastContainer theme={"colored"} position="bottom-right" />

      </div>
    </QueryClientProvider>

  );
}