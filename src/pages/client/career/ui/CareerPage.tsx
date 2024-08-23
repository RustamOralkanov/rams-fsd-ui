import { Flex } from "antd";
import { Consultation } from "@/entities/consultation";
import { CareerBanner } from "./banner/CareerBanner";
import { CareerFeatures } from "./offers/CareerOffers";
import { CareerVacancies } from "./vacancies/CareerVacancies";

export const CareerPage = () => {
    return (
        <Flex vertical gap={80}>
            <CareerBanner />
            <CareerFeatures />
            <CareerVacancies />
            <Consultation />
        </Flex>
    );
};
