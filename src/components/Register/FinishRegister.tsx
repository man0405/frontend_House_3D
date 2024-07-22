"use client";
import { Button, Result } from "antd";

import { useRouter } from "next/navigation";
import React from "react";

export default function FinishRegister() {
	const router = useRouter();
	return (
		<Result
			status="success"
			title="Successfully Registered Account"
			subTitle="Please check your email to verify your account"
			extra={[
				<Button
					type="primary"
					key="console"
					onClick={() => {
						router.replace("auth/login");
					}}
				>
					Go To Login
				</Button>,
			]}
		/>
	);
}
