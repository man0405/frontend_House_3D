import React from "react";

import { Divider, Flex, Input, Space } from "antd";
import { Footer } from "antd/es/layout/layout";
import TitleCustom from "../UI/Typography/TitleCustom";
import {
	ArrowRightOutlined,
	FacebookFilled,
	GooglePlusSquareFilled,
	MailOutlined,
	RedditSquareFilled,
	TwitterSquareFilled,
} from "@ant-design/icons";
import Link from "antd/es/typography/Link";

export default function FooterCustom() {
	return (
		<Footer>
			<Flex justify="space-between" wrap={true} gap="middle">
				<Space direction="vertical">
					<TitleCustom level={5} type="secondary">
						6111 Brynhurst Ave, Los Angeles, CA 90043, Hoa Kỳ
					</TitleCustom>
					<TitleCustom level={5} type="secondary">
						+1 323-291-0342
					</TitleCustom>
					<TitleCustom level={5} type="secondary">
						{" "}
						hello@finderland.com
					</TitleCustom>
					<Space>
						<TitleCustom level={5} type="secondary">
							<FacebookFilled />
						</TitleCustom>
						<TitleCustom level={5} type="secondary">
							<TwitterSquareFilled />
						</TitleCustom>
						<TitleCustom level={5} type="secondary">
							<GooglePlusSquareFilled />
						</TitleCustom>
						<TitleCustom level={5} type="secondary">
							<RedditSquareFilled />
						</TitleCustom>
					</Space>
				</Space>
				<Space direction="vertical">
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							For Sell
						</Link>
					</TitleCustom>
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							For Rent
						</Link>
					</TitleCustom>
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							Consult
						</Link>
					</TitleCustom>
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							Privacy Policy
						</Link>
					</TitleCustom>
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							Term & Conditions
						</Link>
					</TitleCustom>
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							FAQs
						</Link>
					</TitleCustom>
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							User's Guide
						</Link>
					</TitleCustom>
				</Space>
				<Space direction="vertical">
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							About Us
						</Link>
					</TitleCustom>
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							Carrers
						</Link>
					</TitleCustom>
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							Contact Us
						</Link>
					</TitleCustom>
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							Terms Of Use
						</Link>
					</TitleCustom>
					<TitleCustom level={5}>
						<Link type="secondary" href="/" style={{ fontSize: "inherit" }}>
							Help Center
						</Link>
					</TitleCustom>
				</Space>
				<Space direction="vertical">
					<TitleCustom level={5} type="secondary">
						Be the first to get the latest news about market, promotions and
						much more!
					</TitleCustom>
					<Input
						placeholder="Enter your email"
						style={{ padding: "1.2rem" }}
						size="large"
						prefix={
							<MailOutlined className="ant-typography ant-typography-secondary css-dev-only-do-not-override-m4timi" />
						}
						suffix={
							<ArrowRightOutlined
								className="ant-typography ant-typography-secondary css-dev-only-do-not-override-m4timi"

								// TODO handle subscribe
							/>
						}
					/>
					<TitleCustom level={5} type="secondary">
						By submitting this form, you accept the{" "}
						<Link
							type="secondary"
							href="/"
							style={{ fontSize: "inherit" }}
							underline={true}
						>
							Privacy Policy
						</Link>
					</TitleCustom>
				</Space>
			</Flex>
			<Divider />
			<TitleCustom level={5} type="secondary" style={{ textAlign: "center" }}>
				© 2024 House – Never Give Up. All right reserved
			</TitleCustom>
		</Footer>
	);
}
