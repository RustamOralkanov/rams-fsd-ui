import { Flex } from "antd";
import { Consultation } from "../../../../entities/consultation";
import { Payments } from "../../../../widgets/payments";
import { ComplexAbout } from "./about/ComplexAbout";
import { ComplexBanner } from "./banner/ComplexBanner";
import { ComplexGallery } from "./gallery/ComplexGallery";
import { ComplexProgress } from "./progress/ComplexProgress";
import { ComplexFeatures } from "./features/ComplexFeatures";
import { ComplexInfrastructure } from "./infrastructure/ComplexInfrastructure";

export const ComplexPage = () => {
    return (
        <Flex vertical gap={80}>
            <ComplexBanner />
            <ComplexAbout />
            <ComplexFeatures />
            <ComplexInfrastructure />
            <Payments />
            <ComplexGallery />
            <ComplexProgress />
            <Consultation />
        </Flex>
    );
};
