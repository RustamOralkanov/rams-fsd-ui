import common from "@styles/common.module.scss";
import { Button, Col, Flex, Form, Row, Tag, Typography } from "antd";
import { debounce } from "lodash";
import { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks/useRedux";
import { CancelIcon } from "../../../../shared/icons";
import { Colors } from "../../../../shared/types/Colors";
import { CustomInputRange, CustomRooms } from "../../../../shared/ui";
import { useGetComplexesFilterQuery } from "../../api/complexes.api";
import { setComplexFilter } from "../../model/reducer/reducer";
import { ComplexParams } from "../../model/types/complex";
import { useFilter } from "../../model/useFilter";

const { Text } = Typography;

export const ComplexFilter = () => {
    const dispatch = useAppDispatch();
    const { filter_labels, labels, onFinish, handleLabels, clearFilter, form } = useFilter();
    const { data, isSuccess } = useGetComplexesFilterQuery();

    // useEffect(() => {
    //     if (isSuccess && data) {
    //         form.setFieldsValue({ rooms: data.rooms, price: [data.prices[0], data.prices[1]], sizes: [data.sizes[0], data.sizes[1]] });
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isSuccess]);

    const onValuesChange = debounce((_, values: ComplexParams) => {
        dispatch(setComplexFilter(values));
    }, 300);

    if (!data) return null;

    if (isSuccess)
        return (
            <Form name="complex-filter" form={form} onFinish={onFinish} onValuesChange={onValuesChange}>
                <Row gutter={[20, 20]} align={"bottom"}>
                    <Col xl={6}>
                        <Form.Item name={"rooms"}>
                            <CustomRooms is_title rooms={data.rooms} />
                        </Form.Item>
                    </Col>
                    {/* <Col xl={6}>
                        <Form.Item name={"price"}>
                            <CustomInputRange title="Стоимость" min={data?.prices[0] || 0} max={data?.prices[1] || 0} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"sizes"}>
                            <CustomInputRange title="Площадь" min={data?.sizes[0] || 0} max={data?.sizes[1] || 0} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Показать {data?.counts} планировок
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
                    </Col> */}
                </Row>
            </Form>
        );
};
