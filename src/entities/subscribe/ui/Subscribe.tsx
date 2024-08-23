import { Button, Flex, Form, Image, Input, Typography } from "antd";
import LetterIcon from "@/app/assets/icons/letter.svg";
import { Container } from "@/shared/ui";

const { Text, Title } = Typography;

export const Subscribe = () => {
    const [form] = Form.useForm();
    const onFinish = (values: { email: string }) => {
        console.log(values);

        form.resetFields();
    };
    return (
        <section>
            <Container>
                <Flex justify="space-between" align="center" className="padding-30 bg-gray-50 border-radius-m">
                    <Flex gap={30} align="center">
                        <Image src={LetterIcon} preview={false} />
                        <Flex vertical gap={4}>
                            <Title level={4} className="color-green-300">
                                Будьте в курсе всех новостей!
                            </Title>
                            <Text className="color-gray-500">Morem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </Flex>
                    </Flex>
                    <Form name="subscribe" onFinish={onFinish} form={form}>
                        <Flex align="flex-start" gap={20}>
                            <Form.Item name={"email"} rules={[{ required: true }]} style={{ width: 270 }}>
                                <Input type="email" placeholder="Введите e-mail" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Подписаться
                                </Button>
                            </Form.Item>
                        </Flex>
                    </Form>
                </Flex>
            </Container>
        </section>
    );
};
