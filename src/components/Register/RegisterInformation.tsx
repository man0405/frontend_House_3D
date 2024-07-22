import { Button, Form, FormProps, Input, Typography } from "antd";
import React from "react";

const { Text, Link, Title } = Typography;
type FieldType = {
	firstName?: string;
	lastName?: string;
	phoneNumber?: string;
};

export default function RegisterInformation({
	formDataHandler,
	next,
}: {
	formDataHandler: (value: {}) => void;
	next: () => void;
}) {
	const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
		console.log("Success:", values);
		next();
		formDataHandler(values);
	};
	return (
		<>
			<Title>More Information</Title>
			<Text type="secondary" style={{ marginBottom: 52 }} strong>
				Enter your information to finish create account
			</Text>
			<Form layout="vertical" style={{ width: "100%" }} onFinish={onFinish}>
				<Form.Item
					label={<span style={{ fontWeight: "bold" }}>First Name</span>}
					name="firstName"
					hasFeedback
					style={{
						display: "inline-block",
						width: "calc(50% - 8px)",
					}}
					rules={[
						{
							pattern: /^[a-zA-Z]+$/,
							message: "The input is not valid first name!",
						},
						{
							required: true,
							message: "Please input your first name!",
						},
					]}
				>
					<Input placeholder="" id="firsName" size="large" />
				</Form.Item>
				<Form.Item
					style={{
						display: "inline-block",
						width: "calc(50% - 8px)",
						marginLeft: 16,
					}}
					label={<span style={{ fontWeight: "bold" }}>Last Name</span>}
					name="lastName"
					hasFeedback
					rules={[
						{
							pattern: /^[a-zA-Z]+$/,
							message: "The input is not valid last name!",
						},
						{ required: true, message: "Please input your last name!" },
					]}
				>
					<Input id="lastName" size="large" />
				</Form.Item>

				<Form.Item
					label={<span style={{ fontWeight: "bold" }}>Phone Number</span>}
					hasFeedback
					name={"phoneNumber"}
					rules={[
						{
							required: true,
							message: "Please input your phone number!",
						},
						{
							pattern: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
							message: "The input is not valid phone number!",
						},
					]}
				>
					<Input id="phoneNumber" size="large" />
				</Form.Item>
				<Form.Item style={{ paddingTop: 10 }}>
					<Button type="primary" htmlType="submit" block size="large">
						Next
					</Button>
				</Form.Item>
			</Form>
		</>
	);
}
