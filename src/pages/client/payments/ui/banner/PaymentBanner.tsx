import { Button, Flex, Image, Typography } from "antd";
import { Colors } from "../../../../../shared/types/Colors";
import { Container } from "../../../../../shared/ui";

import "./PaymentBanner.scss";

const { Title } = Typography;

export const PaymentBanner = () => {
    return (
        <section>
            <Container>
                <Flex className="payment-banner" align="center">
                    <Flex className="payment-banner-image">
                        <Image src={"https://ramsqz.com/storage/pages/mortgages/main_banner_9da4ef66a0a0969ae0fb737a46c46075.png"} preview={false} />
                    </Flex>
                    <Flex vertical className="payment-banner-wrapper" gap={30}>
                        <Title level={1} style={{ color: Colors.white }}>
                            Максимально выгодные программы ипотеки
                        </Title>
                        <Button type="primary" style={{ width: "fit-content" }}>
                            Оставить заявку
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </section>
    );
};
