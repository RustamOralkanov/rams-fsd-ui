import { Flex } from "antd";
import { Consultation } from "@/entities/consultation";
import { NewsList } from "@/entities/news";
import { AboutBanner } from "./banner/AboutBanner";
import { AboutDevelopment } from "./development/AboutDevelopment";
import { AboutFeatures } from "./features/AboutFeatures";
import { AboutInfo } from "./info/AboutInfo";

export const AboutPage = () => {
    return (
        <Flex vertical gap={80}>
            <AboutBanner />
            <AboutFeatures />
            <AboutDevelopment />
            <AboutInfo />
            <NewsList />
            <Consultation />
        </Flex>
    );
};
