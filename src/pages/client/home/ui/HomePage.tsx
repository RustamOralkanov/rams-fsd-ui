import { Flex } from "antd";
import { Consultation } from "../../../../entities/consultation";
import { NewsList } from "../../../../entities/news";
import { Complexes } from "../../../../features/complexes";
import { Payments } from "../../../../widgets/payments";
import { Banners } from "./banners/Banners";

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
