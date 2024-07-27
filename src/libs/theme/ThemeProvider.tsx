"use client";
import { ConfigProvider, theme } from "antd";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function ThemeProviderApp({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(true);

  useEffect(() => {
    resolvedTheme === "light" ? setCurrentTheme(false) : setCurrentTheme(true);
  }, [resolvedTheme]);
  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          // colorPrimary: "#333",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
