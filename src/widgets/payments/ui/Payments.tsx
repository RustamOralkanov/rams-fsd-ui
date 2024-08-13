import { Tabs, Flex, Typography } from "antd";
import { Container } from "../../../shared/ui/container";
import { methods } from "../model/payments";

const { Title } = Typography;

export const Payments = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Способы покупки</Title>
                    <Tabs items={methods} />
                </Flex>
            </Container>
        </section>
    );
};
