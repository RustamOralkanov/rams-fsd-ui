import { Flex, Row, Typography } from "antd";
import { Colors } from "../../../../shared/types/Colors";
import { parkings } from "../../model/properties.data";

const { Text, Title } = Typography;

export const FlatsTab = () => {
    return (
        <Flex vertical gap={40} className="complexes-tab">
            <Flex gap={50} align="center">
                {parkings.map((parking, index) => (
                    <Flex align="center" gap={10} key={index}>
                        <Flex justify="center" align="center" className="complexes-tab-icon" style={{ backgroundColor: parking.color }}>
                            {parking.icon}
                        </Flex>
                        <Flex vertical>
                            <Title level={5}>{parking.title}</Title>
                            <Text style={{ fontSize: 12, lineHeight: 1.3, color: Colors.gray300 }}>{parking.count} предложения</Text>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
            <Row gutter={[60, 20]}></Row>
        </Flex>
    );
};
