import { Flex } from "antd";
import { PartnersAdvantages } from "./advantages/PartnersAdvantages";
import { PartnersBanner } from "./banner/PartnersBanner";
import { PartnersComplexes } from "./complexes/PartnersComplexes";
import { PartnersCooperation } from "./cooperation/PartnersCooperation";
import { PartnersFeatures } from "./features/PartnersFeatures";
import { PartnersFeedback } from "./feedback/PartnersFeedback";
import { Partners } from "./partners/Partners";
import { PartnersProcess } from "./process/PartnersProcess";

export const PartnersPage = () => {
    return (
        <Flex vertical gap={80}>
            <PartnersBanner />
            <PartnersFeatures />
            <PartnersAdvantages />
            <PartnersProcess />
            <Partners />
            <PartnersCooperation />
            <PartnersFeedback />
            <PartnersComplexes />
        </Flex>
    );
};
