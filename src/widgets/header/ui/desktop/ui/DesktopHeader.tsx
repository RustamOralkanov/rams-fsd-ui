import { Flex, Image } from "antd";
import { Link, NavLink } from "react-router-dom";
import { headerData } from "../../../model/header.data";
import { FavoriteIcon, UserIcon } from "../../../../../shared/icons";
import { Colors } from "../../../../../shared/types/Colors";
import { LangSwitch } from "../../../../../entities/lang";
import { Container } from "../../../../../shared/ui/container";

import "./DesktopHeader.scss";

export const DesktopHeader = () => {
    return (
        <header className="header">
            <Container>
                <Flex justify="space-between" align="center" flex={1}>
                    <Flex gap={35} align="center">
                        <Link to={"/"}>
                            <Image src={headerData.logo} preview={false} />
                        </Link>
                        <Flex gap={5} align="center">
                            {headerData.pages.map((page, index) => (
                                <NavLink to={page.path} key={index} className={"header-link"}>
                                    {page.icon && <Image src={page.icon} preview={false} />}
                                    {page.title}
                                </NavLink>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex align="center" gap={20}>
                        <a href={`tel:${headerData.phone}`} className="header-phone">
                            {headerData.phone}
                        </a>
                        <FavoriteIcon style={{ color: Colors.gray300 }} />
                        <UserIcon style={{ color: Colors.gray300 }} />
                        <LangSwitch />
                    </Flex>
                </Flex>
            </Container>
        </header>
    );
};
