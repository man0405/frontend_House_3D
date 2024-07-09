"use client";

import { Button, Col, Divider, Form, Input, Row, Typography } from "antd";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import google from "@/assets/svg/google.svg";
import facebook from "@/assets/svg/facebook.svg";
import ButtonCustom from "../UI/Button/ButtonCustom";
import useDebounce from "@/hooks/useDebounce";
import { FormProps, useForm } from "antd/es/form/Form";

type FieldType = {
	username?: string;
	password?: string;
	["re-enter-password"]?: string;
};

const { Text, Link, Title } = Typography;
export default function Register({
	formDataHandler,
	next,
}: {
	formDataHandler: (value: {}) => void;
	next: () => void;
}) {
	const [form] = useForm();
	const [userName, setUserName] = useState("");
	const useNameDebounce = useDebounce(userName, 500);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
	};

	const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
		console.log("Success:", values);
		next();
		formDataHandler(values);
	};

	useEffect(() => {
		if (form.getFieldError("username").length == 0) {
			//TODO: call api to  Check existing username
		}
	}, [useNameDebounce, form]);

	return (
		<>
			<Title>Get Started Now</Title>
			<Text type="secondary" style={{ marginBottom: 52 }} strong>
				Enter your credentials to access your account
			</Text>
			<Row wrap={false} style={{ marginBottom: 24 }}>
				<Col style={{ width: "100%" }}>
					<ButtonCustom
						primaryColor="#cd3838"
						size="large"
						style={{ width: "100%" }}
					>
						<Image src={google} alt="" width={16} height={16} />
						Login with Google
					</ButtonCustom>
				</Col>
				<Col offset={1} style={{ width: "100%" }}>
					<ButtonCustom
						primaryColor="#2b4db5"
						size="large"
						style={{ width: "100%" }}
					>
						<Image src={facebook} alt="" width={16} height={16} />
						Login with Facebook
					</ButtonCustom>
				</Col>
			</Row>
			<Divider>OR</Divider>

			<Form
				form={form}
				layout="vertical"
				style={{ width: "100%" }}
				onFinish={onFinish}
			>
				<Form.Item
					label={<span style={{ fontWeight: "bold" }}>Username</span>}
					name="username"
					hasFeedback
					rules={[
						{
							required: true,
							message: "Please input your username!",
						},
						{
							type: "email",
							message: "The input is not valid E-mail!",
						},
					]}
				>
					<Input
						placeholder="mail@mail.com"
						id="username"
						size="large"
						onChange={onChangeHandler}
					/>
				</Form.Item>
				<Form.Item
					label={<span style={{ fontWeight: "bold" }}>Password</span>}
					name="password"
					hasFeedback
					rules={[
						{ required: true, message: "Please input your password!" },
						{
							pattern: /(?=.*\d)/gm,
							message: "At least one digit",
						},
						{
							pattern: /(?=.*[@$!%*#?&])/gm,
							message: "At least one special character",
						},

						{
							pattern: /(?=.*[A-Z])/gm,
							message: "At least one uppercase letter",
						},
						{
							min: 8,
							message: "Minimum 8 characters",
						},
					]}
				>
					<Input.Password id="password" size="large" placeholder="•••••••••" />
				</Form.Item>
				<Form.Item
					label={<span style={{ fontWeight: "bold" }}>Re-enter Password</span>}
					hasFeedback
					dependencies={["password"]}
					name={"re-enter-password"}
					rules={[
						{ required: true, message: "Please input your password!" },
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve();
								}
								return Promise.reject(
									new Error("The new password that you entered do not match!")
								);
							},
						}),
					]}
				>
					<Input.Password
						id="re-enter-password"
						size="large"
						placeholder="•••••••••"
					/>
				</Form.Item>
				<Form.Item style={{ paddingTop: 10 }}>
					<Button type="primary" htmlType="submit" block size="large">
						Submit
					</Button>
				</Form.Item>
			</Form>
			<Text type="secondary" style={{ marginBottom: 10, textAlign: "center" }}>
				Already have an account?{" "}
				<Link href="" underline strong>
					Login
				</Link>
			</Text>
		</>
	);
}
