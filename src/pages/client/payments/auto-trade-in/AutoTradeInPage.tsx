import { Flex } from "antd";
import { Consultation } from "../../../../entities/consultation";
import { AutoTradeIn } from "../../../../entities/payments";
import { Container } from "../../../../shared/ui";
import { PaymentBanner, PaymentComplexes, PaymentFeatures, PaymentVideo } from "../ui";

export const AutoTradeInPage = () => {
    return (
        <Flex vertical gap={80}>
            <PaymentBanner is_button={false} is_text={false} is_additional />
            <PaymentFeatures />
            <section>
                <Container>
                    <AutoTradeIn />
                </Container>
            </section>
            <PaymentVideo />
            <PaymentComplexes />
            <Consultation />
        </Flex>
    );
};
