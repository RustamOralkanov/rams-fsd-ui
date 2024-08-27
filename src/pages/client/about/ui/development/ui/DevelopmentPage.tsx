import { Flex } from "antd";
import { Consultation } from "@/entities/consultation";
import { DevelopmentBanner } from "./banner/DevelopmentBanner";
import { DevelopmentInfo } from "./info/DevelopmentInfo";

export const DevelopmentPage = () => {
    return (
        <Flex vertical gap={80}>
            <DevelopmentBanner />
            <DevelopmentInfo />
            <Consultation />
        </Flex>
    );
};
