import { Flex, Form, Typography } from "antd";
import { Colors } from "../../../../types/Colors";
import { CustomRoomsProps } from "../model/types";
import { useCustomRooms } from "../model/useCustomRooms";
import "./CustomRooms.scss";

const { Text } = Typography;

export const CustomRooms: React.FC<CustomRoomsProps> = (props) => {
    const { status } = Form.Item.useStatus();
    const { selectedRooms, handleClick } = useCustomRooms(props);

    console.log(props.value);

    return (
        <Flex vertical gap={10}>
            {props.is_title && (
                <Text style={{ fontSize: 12, fontWeight: 400, color: Colors.gray600 }}>
                    Комнатность <br />
                    <pre>{JSON.stringify(selectedRooms, null, 2)}</pre>
                </Text>
            )}
            <Flex gap={5} className="custom-rooms" align="center">
                {props.rooms.map((room, index) => (
                    <Flex
                        justify="center"
                        align="center"
                        key={index}
                        className={`custom-rooms-room ${status} ${selectedRooms.some((selectedRoom) => selectedRoom.label === room.label) ? "active" : ""}`}
                        onClick={() => handleClick(room)}
                    >
                        {room.label}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};
