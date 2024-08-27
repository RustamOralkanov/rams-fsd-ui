import { Flex } from "antd";
import { Consultation } from "@/entities/consultation";
import { SupportBanner } from "./banner/SupportBanner";
import { SupportTeam } from "./team/SupportTeam";

export const SupportPage = () => {
    return (
        <Flex vertical gap={80}>
            <SupportBanner />
            <SupportTeam />
            <Consultation title="Вопросы и пожелания" text="Если у Вас возникли вопросы или есть пожелания, вы можете оставить их ниже." />
        </Flex>
    );
};
