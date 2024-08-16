import { Button, Col, Flex, Form, Row, Tag, Typography } from "antd";
import { CustomInputRange, CustomRooms } from "../../../../shared/ui";
import { useFilter } from "../../model/useFilter";
import { CancelIcon } from "../../../../shared/icons";
import { Colors } from "../../../../shared/types/Colors";
import common from "../../../../shared/styles/common.module.scss";

const { Text } = Typography;

export const ComplexFilter = () => {
    const { filter_labels, labels, onFinish, handleLabels, clearFilter, form } = useFilter();

    return (
        <Form name="complex-filter" form={form} onFinish={onFinish}>
            <Row gutter={[20, 20]} align={"bottom"}>
                <Col xl={6}>
                    <Form.Item name={1}>
                        <CustomRooms />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={2}>
                        <CustomInputRange title="Стоимость" />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={3}>
                        <CustomInputRange title="Площадь" />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            Показать 9 825 планировок
                        </Button>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Flex align="center" justify="space-between">
                        <Flex align="center" gap={10}>
                            {filter_labels.map((label, index) => (
                                <Tag
                                    key={index}
                                    className={common.pointer}
                                    style={{ fontWeight: 400 }}
                                    color={labels.includes(label) ? Colors.green500 : ""}
                                    onClick={() => handleLabels(label)}
                                >
                                    {label}
                                </Tag>
                            ))}
                        </Flex>
                        <Flex className={common.pointer} align="center" gap={8} onClick={clearFilter}>
                            <Text style={{ fontSize: 12 }}>Очистить всё</Text>
                            <CancelIcon />
                        </Flex>
                    </Flex>
                </Col>
            </Row>
        </Form>
    );
};
