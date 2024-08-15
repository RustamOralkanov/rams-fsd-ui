import { Col, Flex, Form, Row, Typography } from "antd";
import { CustomInputRange, CustomSelectTags } from "../../../../shared/ui";
import { CancelIcon } from "../../../../shared/icons";
import { Colors } from "../../../../shared/types/Colors";
import { useStorageFilter } from "../../model/useStorageFilter";
import common from "../../../../shared/styles/common.module.scss";

const { Text } = Typography;

export const StorageFilter = () => {
    const { form, onValuesChange, clearForm } = useStorageFilter();
    return (
        <Form onValuesChange={onValuesChange} form={form} name="storage-filter">
            <Row gutter={[20, 20]} align={"bottom"}>
                <Col xl={6}>
                    <Form.Item name={"complex"}>
                        <CustomSelectTags />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"size"}>
                        <CustomInputRange title="Общая площадь" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Flex justify={"space-between"} align="center">
                        <Text className="flats-count">
                            Найдено <b style={{ color: Colors.green600, fontWeight: 600 }}>9 825</b> планировок
                        </Text>
                        <Flex className={common.pointer} align="center" gap={8} onClick={clearForm}>
                            <Text style={{ fontSize: 12 }}>Очистить всё</Text>
                            <CancelIcon />
                        </Flex>
                    </Flex>
                </Col>
            </Row>
        </Form>
    );
};
