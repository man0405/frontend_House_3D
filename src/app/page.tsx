"use client";
import { Button, Card, ConfigProvider, ThemeConfig } from "antd";
import { theme } from "antd";
import { useTheme } from "next-themes";

const { getDesignToken, useToken } = theme;

const config: ThemeConfig = {
  token: {
    colorPrimary: "#30a082",
  },
};

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        algorithm:
          resolvedTheme === "dark"
            ? theme.darkAlgorithm
            : theme.compactAlgorithm,
      }}
    >
      <main>
        <Card style={{ width: "max-content" }}>
          <Button
            onClick={() => {
              setTheme(resolvedTheme === "light" ? "dark" : "light");
              console.log("Home ~ resolvedTheme:", resolvedTheme);
            }}
          >
            {resolvedTheme === "light" ? "Dark" : "Light"}
          </Button>
        </Card>
      </main>
    </ConfigProvider>
  );
}
