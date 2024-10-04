import common from "@styles/common.module.scss";
import { Flex, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "@/app/constants/router";
import { Colors } from "../../../shared/types/Colors";
import { CustomTag } from "../../../shared/ui";
import { PartialNewsDicountsItem } from "../model/types";

const { Text, Title } = Typography;

export const NewsCard: React.FC<PartialNewsDicountsItem> = (props) => {
    return (
        <Link to={`/${APP_ROUTES.NEWS}/${props.id}`} state={{ id: props.id, type: props.type }}>
            <Flex vertical gap={20}>
                <Flex className={common.relative}>
                    <CustomTag
                        text={props.type === "news" ? "Новости" : "Акции"}
                        type="default"
                        className={common.absolute}
                        style={{ zIndex: 2, left: 15, top: 15, backgroundColor: props.type === "discount" ? "#E34927" : "" }}
                    />
                    <Image src={props.coverImg} preview={false} width={"100%"} height={254} className={[common["radius-10"], common.cover].join(" ")} />
                </Flex>
                <Flex vertical gap={20}>
                    <Title level={3} style={{ height: 60 }} ellipsis={{ rows: 2 }}>
                        {props.title}
                    </Title>
                    <Text style={{ color: Colors.gray600, fontSize: 12 }}>{props.date}</Text>
                </Flex>
            </Flex>
        </Link>
    );
};
