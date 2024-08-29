import { Flex } from "antd";
import { Consultation } from "../../../../entities/consultation";
import { Payments } from "../../../../widgets/payments";
import { ComplexAbout } from "./about/ComplexAbout";
import { ComplexBanner } from "./banner/ComplexBanner";
import { ComplexFeatures } from "./features/ComplexFeatures";
import { ComplexFlats } from "./flats/ComplexFlats";
import { ComplexGallery } from "./gallery/ComplexGallery";
import { ComplexInfrastructure } from "./infrastructure/ComplexInfrastructure";
import { ComplexProgress } from "./progress/ComplexProgress";

export const ComplexPage = () => {
    return (
        <Flex vertical gap={80}>
            <ComplexBanner />
            <ComplexAbout />
            <ComplexFeatures />
            <ComplexFlats />
            <ComplexInfrastructure />
            <Payments />
            <ComplexGallery />
            <ComplexProgress />
            <Consultation />
        </Flex>
    );
};
