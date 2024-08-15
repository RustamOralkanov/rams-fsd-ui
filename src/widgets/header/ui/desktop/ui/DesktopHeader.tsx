import React from "react";
import { useState } from "react";
import { Flex, Image } from "antd";
import { Link, NavLink } from "react-router-dom";
import { headerData } from "../../../model/header.data";
import { ChevronDownIcon, DotsIcon, FavoriteIcon, UserIcon } from "../../../../../shared/icons";
import { Colors } from "../../../../../shared/types/Colors";
import { LangSwitch } from "../../../../../entities/lang";
import { Container } from "../../../../../shared/ui/container";
import LayoutIcon from "../../../../../app/assets/icons/layout.svg";

import "./DesktopHeader.scss";

export const DesktopHeader = () => {
    const [links_count, set_links_count] = useState([0, 4]);

    const showAllLinks = () => set_links_count([4, headerData.pages.length]);
    const resetLinks = () => set_links_count([0, 4]);
    return (
        <header className="header">
            <Container>
                <Flex justify="space-between" align="center" flex={1}>
                    <Flex gap={35} align="center">
                        <Link to={"/"}>
                            <Image src={headerData.logo} preview={false} />
                        </Link>
                        <Flex gap={20} align="center">
                            <Flex className={"header-link"}>
                                <Image src={LayoutIcon} preview={false} />
                                Недвижимость
                            </Flex>
                            <React.Fragment key={links_count[1]}>
                                {headerData.pages.slice(links_count[0], links_count[1]).map((page, index) => {
                                    return (
                                        <NavLink to={page.path} key={index} className={"header-link"}>
                                            {page.title}
                                        </NavLink>
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
