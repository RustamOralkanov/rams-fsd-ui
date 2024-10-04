import LayoutIcon from "@assets/icons/layout.svg";
import common from "@styles/common.module.scss";
import { Col, Flex, Image, Row, Tabs, Typography } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "@/shared/hooks/useRedux";
import { Colors } from "@/shared/types/Colors";
import { APP_ROUTES } from "../../../../../app/constants/router";
import { LangSwitch } from "../../../../../entities/lang";
import { ChevronDownIcon, DotsIcon, FavoriteIcon, UserIcon } from "../../../../../shared/icons";
import { Overlay, Container } from "../../../../../shared/ui";
import { headerData } from "../../../model/headerData";
import { properties } from "../../../model/properties";
import { useHeader } from "../../../model/useHeader";

import "./DesktopHeader.scss";

const { Text, Title } = Typography;

export const DesktopHeader = () => {
    const { links_count, showAllLinks, resetLinks, is_overlay_open, openOverlay, closeOverlay, handleMouseLeave, current_button, set_current_button } = useHeader();
    const { favorites } = useAppSelector((state) => state.favorites);

    return (
        <header className="header">
            <Container>
                <Flex justify="space-between" align="center" flex={1}>
                    <Flex gap={35} align="center">
                        <Link to={"/"}>
                            <Image src={headerData.logo} preview={false} />
                        </Link>
                        <Flex gap={20} align="center">
                            <Flex
                                className={"header-link"}
                                onMouseEnter={() => {
                                    openOverlay();
                                    set_current_button("properties");
                                }}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Image src={LayoutIcon} preview={false} className="fade-in" />
                                Недвижимость
                            </Flex>
                            <React.Fragment key={links_count[1]}>
                                {headerData.pages.slice(links_count[0], links_count[1]).map((page, index) => {
                                    return (
                                        <NavLink
                                            to={page.path}
                                            className={"header-link"}
                                            onMouseEnter={() => {
                                                if (page.children) {
                                                    openOverlay();
                                                    set_current_button(page.key!);
                                                } else {
                                                    return null;
                                                }
                                            }}
                                            onMouseLeave={handleMouseLeave}
                                            key={index}
                                        >
                                            {page.title}
                                        </NavLink>
                                    );
                                })}
                            </React.Fragment>

                            {links_count[1] < headerData.pages.length ? (
                                <DotsIcon onClick={showAllLinks} className="color-gray-500" />
                            ) : (
                                <ChevronDownIcon style={{ transform: "rotate(90deg)", color: Colors.gray500 }} onClick={resetLinks} />
                            )}
                        </Flex>
                    </Flex>
                    <Flex align="center" gap={20}>
                        <a href={`tel:${headerData.phone}`} className="header-phone">
                            {headerData.phone}
                        </a>
                        <Flex gap={5} align="center">
                            <Link to={"/" + APP_ROUTES.FAVORITES}>
                                <Flex justify="center" align="center" className={["header-icon", favorites.length > 0 ? "active" : ""].join(" ")}>
                                    <FavoriteIcon style={{ color: Colors.gray600 }} />
                                </Flex>
                            </Link>
                            <Flex justify="center" align="center" className="header-icon">
                                <UserIcon style={{ color: Colors.gray600 }} />
                            </Flex>
                            <LangSwitch />
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
            <Overlay isOpen={is_overlay_open} onClose={closeOverlay}>
                <Container>
                    {current_button === "properties" && (
                        <Flex className={[common["bg-white"], common["radius-10"], common["padding-40"]].join(" ")}>
                            <Tabs items={properties} animated destroyInactiveTabPane className={common["width-full"]} />
                        </Flex>
                    )}
                    {current_button === "about" && (
                        <Row gutter={10}>
                            <Col xl={16}>
                                <Row gutter={[10, 10]}>
                                    {headerData.pages
                                        .filter((page) => page.key === APP_ROUTES.ABOUT)
                                        .map((page) => {
                                            return page.children?.slice(0, 6).map((child, index) => (
                                                <Col xl={8} key={index}>
                                                    <Link to={child.path}>
                                                        <Flex vertical className="padding-20 bg-gray-50 border-radius-s about-link" style={{ height: 155 }} justify="flex-end">
                                                            <Flex vertical gap={5}>
                                                                <Title level={5}>{child.title}</Title>
                                                                <Text className="description-m color-gray-500">{child.text}</Text>
                                                            </Flex>
                                                        </Flex>
                                                    </Link>
                                                </Col>
                                            ));
                                        })}
                                </Row>
                            </Col>
                            <Col xl={8}>
                                <Flex vertical className="height-full border-radius-s padding-40" justify="space-between" style={{ background: "#4C9FAF" }}>
                                    <Image src="http://localhost:8000/src/app/assets/icons/fms-logo.svg" width={133} preview={false} />
                                    <Flex vertical gap={10}>
                                        <Title level={2} className="color-white">
                                            RAMS FMS
                                        </Title>
                                        <Text className="color-white description-m">
                                            Команда RAMS FMS сделает ваш дом чистым и исправным. Именно мы будем поддерживать работу каждой детали в вашем жилом комплексе.{" "}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Col>
                        </Row>
                    )}
                    {current_button === "payments" && (
                        <Row gutter={10}>
                            {headerData.pages[1].children?.map((child, index) => (
                                <Col xl={6} key={index}>
                                    <Link to={child.path}>
                                        <Flex className="bg-white border-radius-s padding-40" justify="center" align="center">
                                            <Flex gap={10} align="center">
                                                <Flex
                                                    justify="center"
                                                    align="center"
                                                    className="border-radius-circle"
                                                    style={{ backgroundColor: child.color, width: 40, height: 40 }}
                                                >
                                                    {child.icon}
                                                </Flex>
                                                <Flex vertical>
                                                    <Title level={5}>{child.title}</Title>
                                                    <Text className="description color-gray-500">{child.text}</Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Container>
            </Overlay>
        </header>
    );
};
