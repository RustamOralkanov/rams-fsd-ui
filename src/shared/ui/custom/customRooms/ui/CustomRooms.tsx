import { Flex, Form, Typography } from "antd";
import { Colors } from "../../../../types/Colors";
import { CustomRoomsProps } from "../model/types";
import "./CustomRooms.scss";
import { useCustomRooms } from "../model/useCustomRooms";

const { Text } = Typography;

export const CustomRooms: React.FC<CustomRoomsProps> = (props) => {
    const { status } = Form.Item.useStatus();
    const { selectedRooms, handleRoom } = useCustomRooms(props);

    return (
        <Flex vertical gap={10}>
            {props.is_title && <Text style={{ fontSize: 12, fontWeight: 400, color: Colors.gray600 }}>Комнатность</Text>}
            <Flex gap={5} className="custom-rooms" align="center">
                {props.value &&
                    props.rooms.map((room, index) => (
                        <Flex
                            justify="center"
                            align="center"
                            key={index}
                            className={`custom-rooms-room ${status} ${selectedRooms.some((selectedRoom) => selectedRoom.label === room.label) ? "active" : ""}`}
                            onClick={() => handleRoom(room)}
                        >
                            {room.label}
                        </Flex>
                    ))}
            </Flex>
        </Flex>
    );
};
