import { Flex, Typography } from "antd";
import { ICustomTag } from "../model/customTag.model";
import "./CustomTag.scss";

const { Text } = Typography;

export const CustomTag: React.FC<ICustomTag> = ({ text, type = "default", style, className }) => {
    return (
        <Flex className={["custom-tag", type, className].join(" ")} style={{ ...style }}>
            <Text className="custom-tag-text">{text}</Text>
        </Flex>
    );
};
