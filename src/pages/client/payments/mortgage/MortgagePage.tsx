import { Flex } from "antd";
import { useLocation } from "react-router-dom";
import { Consultation } from "../../../../entities/consultation";
import { useGetPaymentsQuery } from "../api/payments.api";
import { PaymentBanner, PaymentComplexes, PaymentFeatures, PaymentMortgage } from "../ui";

export const MortgagePage = () => {
    const { pathname } = useLocation();
    const { data, isSuccess } = useGetPaymentsQuery({ alias: pathname });

    return (
        <Flex vertical gap={80}>
            <PaymentBanner {...data} is_text is_button />
            {isSuccess && <PaymentFeatures {...data} />}
            <PaymentMortgage />
            <PaymentComplexes />
            <Consultation />
        </Flex>
    );
};
