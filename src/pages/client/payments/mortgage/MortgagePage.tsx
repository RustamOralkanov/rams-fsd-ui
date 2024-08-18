import { Flex } from "antd";
import { Consultation } from "../../../../entities/consultation";
import { PaymentBanner, PaymentComplexes, PaymentFeatures, PaymentMortgage } from "../ui";

export const MortgagePage = () => {
    return (
        <Flex vertical gap={80}>
            <PaymentBanner />
            <PaymentFeatures />
            <PaymentMortgage />
            <PaymentComplexes />
            <Consultation />
        </Flex>
    );
};
