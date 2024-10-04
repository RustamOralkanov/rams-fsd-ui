import common from "@styles/common.module.scss";
import { Col, Row, Flex, Typography, Form, FormProps, Image, Button } from "antd";
import { useGetPaymentsFormQuery } from "@/pages/client/payments/api/payments.api";
import { Colors } from "@/shared/types/Colors";
import { CustomInputSingleRange, CustomSelectTags } from "@/shared/ui";

const { Text, Title } = Typography;

export const Installment: React.FC<{ formAlias: string }> = ({ formAlias }) => {
    const [form] = Form.useForm();
    const { data } = useGetPaymentsFormQuery({ alias: formAlias! });

    const onFinish: FormProps["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    console.log(data);

    return (
        <Row gutter={[20, 20]}>
            <Col xxl={8} xl={8}>
                <Flex vertical gap={30} className="border-radius-m bg-gray-50 padding-40">
                    <Flex vertical gap={10}>
                        <Title level={3}>{data?.data.title}</Title>
                        <Text style={{ color: Colors.gray500 }}>{data?.data.subtitle}</Text>
                    </Flex>

                    <Form name="installment" form={form} onFinish={onFinish}>
                        <Flex vertical gap={15}>
                            <Form.Item name="complex" rules={[{ required: true }]}>
                                <CustomSelectTags />
                            </Form.Item>
                            <Form.Item name="price" rules={[{ required: true }]}>
                                <CustomInputSingleRange title="Стоимость недвижимости" is_price />
                            </Form.Item>
                            <Form.Item name="deposite" rules={[{ required: true }]}>
                                <CustomInputSingleRange title="Первоначальный взнос" is_percent />
                            </Form.Item>
                            <Form.Item name="years" rules={[{ required: true }]}>
                                <CustomInputSingleRange title="Срок" is_year />
                            </Form.Item>
                            <Form.Item style={{ marginTop: 15 }}>
                                <Button block type="primary" htmlType="submit">
                                    {data?.data.btn_label}
                                </Button>
                            </Form.Item>
                        </Flex>
                    </Form>
                </Flex>
            </Col>
            <Col xxl={16} xl={16}>
                <Image src={data?.data.image} preview={false} height={"100%"} className={[common.cover, common["radius-20"]].join(" ")} />
            </Col>
        </Row>
    );
};
