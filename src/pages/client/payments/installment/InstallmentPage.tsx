import { Flex } from "antd";
import { useLocation } from "react-router-dom";
import { Consultation } from "@/entities/consultation";
import { Installment } from "@/entities/payments";
import { Container } from "@/shared/ui";
import { useGetPaymentsQuery } from "../api/payments.api";
import { PaymentBanner, PaymentComplexes, PaymentFeatures } from "../ui";

export const InstallmentPage = () => {
    const { pathname } = useLocation();
    const { data, isSuccess } = useGetPaymentsQuery({ alias: pathname });

    return (
        <Flex vertical gap={80}>
            <PaymentBanner {...data} is_text is_button />
            {isSuccess && <PaymentFeatures {...data} />}
            <section>
                <Container>
                    <Installment formAlias={"installments-form"} />
                </Container>
            </section>
            <PaymentComplexes />
            <Consultation />
        </Flex>
    );
};
