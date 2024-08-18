import { Col, Flex, Row, Typography } from "antd";
import { Colors } from "../../../../shared/types/Colors";
import { complexes } from "../../model/properties.data";
import { ComplexesTabCard } from "../card/ComplexesTabCard";

import "./ComplexesTab.scss";

const { Text, Title } = Typography;

export const ComplexesTab = () => {
    return (
        <Flex vertical gap={40} className="complexes-tab">
            <Flex gap={50} align="center">
                {complexes.map((complex, index) => (
                    <Flex align="center" gap={10} key={index}>
                        <Flex justify="center" align="center" className="complexes-tab-icon" style={{ backgroundColor: complex.color }}>
                            {complex.icon}
                        </Flex>
                        <Flex vertical>
                            <Title level={5}>{complex.title}</Title>
                            <Text style={{ fontSize: 12, lineHeight: 1.3, color: Colors.gray300 }}>{complex.count} проекта</Text>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
            <Row gutter={[60, 20]}>
                {[...Array(8)].map((_, index) => (
                    <Col xxl={6} xl={8} key={index}>
                        <ComplexesTabCard />
                    </Col>
                ))}
            </Row>
        </Flex>
    );
};
