"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Divider,
  Image,
  ConfigProvider,
  theme,
  Flex,
  Layout,
} from "antd";
import Title from "antd/es/typography/Title";
import StyleSheet from "react";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { useTheme } from "next-themes";
import Link from "next/link";

const { Text } = Typography;
const { useToken } = theme;

export default function SignupForm() {
  const [form] = Form.useForm();
  const { resolvedTheme, setTheme } = useTheme();
  const { token } = useToken();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#A9C3D6",
      }}
    >
      <Flex
        style={{
          width: "80%",
          background: token.colorPrimaryBg,
          // padding: "2rem",
          justifyContent: "center",
        }}
      >
        <Row
          gutter={30}
          style={{
            minHeight: "100vh",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={11}
            xl={11}
            xxl={11}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Title level={2}>Sign In</Title>
            <Text>Kindly fill in your details to be a part of the camp</Text>

            <Form
              layout="vertical"
              form={form}
              style={{ maxWidth: 400, marginTop: "20px" }}
            >
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold" }}>Email Address</span>
                }
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
                style={{ borderRadius: "10px" }}
              >
                <Input
                  placeholder="Enter email"
                  style={{
                    height: "50px",
                    padding: "20px",
                    borderRadius: "15px",
                  }}
                />
              </Form.Item>
              <Form.Item
                label={<label style={{ fontWeight: "bold" }}>Password</label>}
                name="password"
                rules={[{ message: "Please create a password" }]}
              >
                <Input.Password
                  placeholder="Enter password"
                  style={{
                    height: "50px",
                    padding: "20px",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    borderRadius: "15px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject("Should accept terms and conditions"),
                  },
                ]}
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Checkbox>Remeber my account</Checkbox>
                  <Link className="login-form-forgot" href="">
                    Forgot password
                  </Link>
                </div>
              </Form.Item>
              <Form.Item style={{ borderRadius: "10px", overflow: "hidden" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "100%",
                    height: "3rem",
                    borderRadius: "10px",
                    backgroundColor: "#c4564a",
                    border: "none",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <h3>Log In</h3>
                </Button>
              </Form.Item>
              <Text
                type="secondary"
                style={{
                  display: "block",
                  textAlign: "center",
                  margin: "10px 0",
                }}
              >
                <Divider orientation="center" style={{ borderWidth: "10px" }}>
                  or
                </Divider>
              </Text>
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: "#DA4B3E",
                      algorithm: true,
                    },
                  },
                }}
              >
                <Button
                  style={{
                    width: "100%",
                    marginBottom: "15px",
                    padding: "20px",
                    borderRadius: "10px",
                    border: "none",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <GoogleOutlined />
                  Log in with Google
                </Button>
              </ConfigProvider>
              <Button
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "none",
                  transition: "background-color 0.3s ease",
                }}
              >
                <FacebookFilled />
                Log in with Facebook
              </Button>
            </Form>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={11}
            xl={11}
            xxl={{ flex: "auto" }}
            style={{}}
          >
            <Flex align="center">
              <Image
                style={{
                  minHeight: "40rem",
                }}
                src="https://images.unsplash.com/photo-1633098205447-de387b769109?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                preview={false}
                height={"100%"}
              />
            </Flex>
          </Col>
        </Row>
      </Flex>
    </div>
  );
}
