import { Flex, Tabs } from "antd";
import { Subscribe } from "@/entities/subscribe";
import { Container } from "@/shared/ui";
import { AllTab, DiscountsTab, NewsTab } from "./tabs";

export const NewsPage = () => {
    return (
        <Flex vertical gap={80}>
            <section>
                <Container>
                    <Tabs
                        animated
                        items={[
                            {
                                key: "all",
                                label: "Все",
                                children: <AllTab />,
                            },
                            {
                                key: "news",
                                label: "Новости",
                                children: <NewsTab />,
                            },
                            {
                                key: "discounts",
                                label: "Акции",
                                children: <DiscountsTab />,
                            },
                            {
                                key: "media",
                                label: "СМИ о нас",
                                children: 1,
                                disabled: true,
                            },
                        ]}
                    />
                </Container>
            </section>
            <Subscribe />
        </Flex>
    );
};
