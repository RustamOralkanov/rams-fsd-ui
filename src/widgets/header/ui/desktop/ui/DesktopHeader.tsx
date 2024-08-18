import LayoutIcon from "@assets/icons/layout.svg";
import common from "@styles/common.module.scss";
import { Flex, Image, Tabs } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LangSwitch } from "../../../../../entities/lang";
import { ChevronDownIcon, DotsIcon, FavoriteIcon, UserIcon } from "../../../../../shared/icons";
import { Colors } from "../../../../../shared/types/Colors";
import { Overlay, Container } from "../../../../../shared/ui";
import { headerData } from "../../../model/headerData";
import { properties } from "../../../model/properties";
import { useHeader } from "../../../model/useHeader";

import "./DesktopHeader.scss";

export const DesktopHeader = () => {
    const { links_count, showAllLinks, resetLinks, isOverlayOpen, openOverlay, closeOverlay } = useHeader();
    return (
        <header className="header">
            <Container>
                <Flex justify="space-between" align="center" flex={1}>
                    <Flex gap={35} align="center">
                        <Link to={"/"}>
                            <Image src={headerData.logo} preview={false} />
                        </Link>
                        <Flex gap={20} align="center">
                            <Flex className={"header-link"} onMouseEnter={openOverlay}>
                                <Image src={LayoutIcon} preview={false} className="fade-in" />
                                Недвижимость
                            </Flex>
                            <Overlay isOpen={isOverlayOpen} onClose={closeOverlay}>
                                <Container>
                                    <Flex className={[common["bg-white"], common["radius-10"], common["padding-40"]].join(" ")}>
                                        <Tabs items={properties} animated destroyInactiveTabPane className={common["width-full"]} />
                                    </Flex>
                                </Container>
                            </Overlay>
                            <React.Fragment key={links_count[1]}>
                                {headerData.pages.slice(links_count[0], links_count[1]).map((page, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <NavLink to={page.path} className={"header-link"}>
                                                {page.title}
                                            </NavLink>
                                        </React.Fragment>
                                    );
                                })}
                            </React.Fragment>

                            {links_count[1] < headerData.pages.length ? (
                                <DotsIcon onClick={showAllLinks} />
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
                            <Flex justify="center" align="center" className="header-icon active">
                                <FavoriteIcon style={{ color: Colors.gray600 }} />
                            </Flex>
                            <Flex justify="center" align="center" className="header-icon">
                                <UserIcon style={{ color: Colors.gray600 }} />
                            </Flex>
                            <LangSwitch />
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </header>
    );
};
