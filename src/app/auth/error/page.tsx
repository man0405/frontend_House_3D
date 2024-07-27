"use client";
import { Button, Flex, Result, Typography, theme } from "antd";
import "./error.css";
import React from "react";
import Link from "next/link";
import Title from "antd/es/typography/Title";

const { useToken } = theme;

export default function Error() {
  const { token } = useToken();
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: token.colorPrimaryBg,
      }}
    >
      <div
        style={{
          height: "30rem",
          width: "45rem",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>
          WHOOPS!! SOMETHING WENT WRONG
        </h1>
        <section className="error-container">
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
          <span className="zero">
            <span className="screen-reader-text">0</span>
          </span>
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
        </section>
        <div className="link-container">
          <Link target="_blank" href="" className="more-link">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
