import { Flex } from "antd";
import { Consultation } from "@/entities/consultation";
import { MediaAbout } from "./about/MediaAbout";
import { MediaBanner } from "./banner/MediaBanner";

export const MediaPage = () => {
    return (
        <Flex vertical gap={80}>
            <MediaBanner />
            <MediaAbout />
            <Consultation />
        </Flex>
    );
};
