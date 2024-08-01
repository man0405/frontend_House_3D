"use client";
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

type TitleProps = Pick<
	React.ComponentProps<typeof Title>,
	| "code"
	| "copyable"
	| "delete"
	| "disabled"
	| "editable"
	| "ellipsis"
	| "level"
	| "mark"
	| "onClick"
	| "italic"
	| "type"
	| "underline"
	| "children"
	| "style"
>;

export default function TitleCustom({ children, ...props }: TitleProps) {
	return <Title {...props}>{children}</Title>;
}
