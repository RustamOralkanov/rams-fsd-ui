import common from "@styles/common.module.scss";
import { Col, Flex, Form, Row, Typography } from "antd";
import { useState } from "react";
import { CancelIcon } from "../../../../shared/icons";
import { Colors } from "../../../../shared/types/Colors";
import { CustomInputRange, CustomRooms, CustomSelect, CustomSelectTags } from "../../../../shared/ui";
import { IFlatsFilterValues } from "../../model/flatsFilter.model";

import "./FlatsFilter.scss";

const { Text } = Typography;

export const FlatsFilter = () => {
    const [form] = Form.useForm();
    const [additional_menu] = useState(false);

    const onValuesChange = (_: unknown, allValues: IFlatsFilterValues) => {
        console.log("Form values changed:", allValues);
    };

    const clearForm = () => {
        form.resetFields();
    };

    return (
        <Form onValuesChange={onValuesChange} form={form} name="flats-filter">
            <Row gutter={[20, 20]} align={"bottom"} className="flats-filter">
                <Col xl={6}>
                    <Form.Item name={"complex"}>
                        <CustomSelectTags />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"rooms"}>
                        <CustomRooms />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"price"}>
                        <CustomInputRange title="Стоимость" />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"size"}>
                        <CustomInputRange title="Площадь" />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"class"}>
                        <CustomSelect title="Класс" />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"city"}>
                        <CustomSelect title="Город" />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"check_in_date"}>
                        <CustomSelect title="Срок сдачи" />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"facing"}>
                        <CustomSelect title="Тип отделки" />
                    </Form.Item>
                </Col>
                <Col span={24} className={["transited", additional_menu ? "show" : ""].join(" ")}>
                    <Flex justify={"space-between"} align="center">
                        {/* <Button
                            type="primary"
                            onClick={() => set_additional_menu(true)}
                            style={{ opacity: additional_menu ? 0 : 1, position: additional_menu ? "absolute" : "relative" }}
                        >
                            Все фильтры
                        </Button> */}
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
