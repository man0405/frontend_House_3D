import FooterCustom from "@/components/Layout/Footer";
import { Layout, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const headerStyle: React.CSSProperties = {
	textAlign: "center",
	color: "#fff",
	height: 64,
	paddingInline: 48,
	lineHeight: "64px",
	backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
	textAlign: "center",
	minHeight: 120,
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
	textAlign: "center",
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#1677ff",
};

const layoutStyle = {
	borderRadius: 8,
	overflow: "hidden",
	// width: "calc(50% - 8px)",
	// maxWidth: "calc(50% - 8px)",
};

export default function Home() {
	return (
		<Layout style={layoutStyle}>
			<Header style={headerStyle}>Header</Header>
			<Layout>
				<Content style={contentStyle}>Content</Content>
				<Sider width="25%" style={siderStyle}>
					Sider
				</Sider>
			</Layout>
			<FooterCustom />
		</Layout>
	);
}
