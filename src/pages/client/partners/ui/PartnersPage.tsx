import { Flex } from "antd";
import { PartnersBanner } from "./banner/PartnersBanner";
import { PartnersFeatures } from "./features/PartnersFeatures";

export const PartnersPage = () => {
    return (
        <Flex vertical gap={80}>
            <PartnersBanner />
            <PartnersFeatures />
        </Flex>
    );
};
