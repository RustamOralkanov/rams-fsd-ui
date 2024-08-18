import { Button, Flex, Typography } from "antd";
import { CancelIcon } from "../../../../icons";
import "./ClearButton.scss";

const { Text } = Typography;

export const ClearButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <Button className="clear-button" onClick={onClick}>
            <Flex align="center" gap={7}>
                <CancelIcon />
                <Text>Очистить фильтр</Text>
            </Flex>
        </Button>
    );
};
