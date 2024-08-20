import { Flex, Form, Typography } from "antd";
import { Colors } from "../../../../types/Colors";
import { useCustomRooms } from "../model/useCustomRooms";
import "./CustomRooms.scss";

interface CustomRoomsProps {
    onChange?: (value: number[]) => void;
    is_title?: boolean;
}

const { Text } = Typography;

export const CustomRooms = ({ onChange = () => {}, is_title = true }: CustomRoomsProps) => {
    const { status } = Form.Item.useStatus();
    const { flats, handleFlats } = useCustomRooms(onChange);

    return (
        <Flex vertical gap={10}>
            {is_title && <Text style={{ fontSize: 12, fontWeight: 400, color: Colors.gray600 }}>Комнатность</Text>}
            <Flex gap={5} className={`custom-rooms`}>
                {[...Array(4)].map((_, index) => (
                    <Flex
                        justify="center"
                        align="center"
                        key={index}
                        className={`custom-rooms-room ${status} ${flats.includes(index + 1) ? "active" : ""}`}
                        onClick={() => handleFlats(index + 1)}
                    >
                        {index + 1}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};
