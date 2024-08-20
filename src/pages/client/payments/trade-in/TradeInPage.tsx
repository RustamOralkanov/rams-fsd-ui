import { Flex } from "antd";
import { Consultation } from "../../../../entities/consultation";
import { Installment } from "../../../../entities/payments";
import { Container } from "../../../../shared/ui";
import { PaymentBanner, PaymentComplexes, PaymentFAQ, PaymentFeatures, PaymentProcess } from "../ui";

export const TradeInPage = () => {
    return (
        <Flex vertical gap={80}>
            <PaymentBanner is_button={false} is_additional />
            <PaymentFeatures />
            <section>
                <Container>
                    <Installment />
                </Container>
            </section>
            <PaymentProcess />
            <PaymentComplexes />
            <PaymentFAQ />
            <Consultation />
        </Flex>
    );
};
