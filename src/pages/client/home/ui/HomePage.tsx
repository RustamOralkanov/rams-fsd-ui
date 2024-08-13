import { Flex } from "antd";
import { Complexes } from "../../../../features/complexes";
import { Banners } from "./banners/Banners";
import { Payments } from "../../../../widgets/payments";
import { NewsList } from "../../../../entities/news";
import { Consultation } from "../../../../entities/consultation";

export const HomePage = () => {
    return (
        <Flex vertical gap={80}>
            <Banners />
            <Complexes />
            <Payments />
            <NewsList />
            <Consultation />
        </Flex>
    );
};
