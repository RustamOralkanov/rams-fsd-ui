import { Flex } from "antd";
import { Consultation } from "@/entities/consultation";
import { FMSAbout } from "./about/FMSAbout";
import { FMSBanner } from "./banner/FMSBanner";
import { FMSFeatures } from "./features/FMSFeatures";
import { FMSNews } from "./news/FMSNews";
import { FMSOffers } from "./offers/FMSOffers";
import { FMSServices } from "./services/FMSServices";

export const FMSPage = () => {
    return (
        <Flex vertical gap={80}>
            <FMSBanner />
            <FMSAbout />
            <FMSServices />
            <FMSOffers />
            <FMSNews />
            <FMSFeatures />
            <Consultation />
        </Flex>
    );
};
