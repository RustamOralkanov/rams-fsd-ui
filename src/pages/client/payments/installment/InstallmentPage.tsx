import { Flex } from "antd";
import { Consultation } from "../../../../entities/consultation";
import { Installment } from "../../../../entities/payments";
import { Container } from "../../../../shared/ui";
import { PaymentBanner, PaymentComplexes, PaymentFeatures } from "../ui";

export const InstallmentPage = () => {
    return (
        <Flex vertical gap={80}>
            <PaymentBanner />
            <PaymentFeatures />
            <section>
                <Container>
                    <Installment />
                </Container>
            </section>
            <PaymentComplexes />
            <Consultation />
        </Flex>
    );
};
