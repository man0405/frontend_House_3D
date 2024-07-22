import React from "react";
import { Button, ConfigProvider } from "antd";
import { ButtonProps } from "antd";
import { ColorValueType } from "antd/es/color-picker/interface";
import { Color } from "antd/es/color-picker";

export interface ButtonCustomProps extends ButtonProps {
	primaryColor?: string;
}

export default function ButtonCustom({
	children,
	primaryColor,
	...rest
}: ButtonCustomProps) {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: primaryColor || "#c4564a",
				},
			}}
		>
			<Button {...rest} onClick={rest.onClick}>
				{children}
			</Button>
		</ConfigProvider>
	);
}
