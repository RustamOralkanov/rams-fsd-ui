import { Flex, Tabs } from "antd";
import { Consultation } from "@/entities/consultation";
import { Container } from "@/shared/ui";
import { ContactsPr } from "./pr/ContactsPr";
import { ContactsSales } from "./sales/ContactsSales";

import "./ContactsPage.scss";

export const ContactsPage = () => {
    return (
        <Flex vertical gap={80} className="contacts-page">
            <section>
                <Container>
                    <Tabs
                        items={[
                            {
                                key: "sales",
                                label: "Офисы продаж",
                                children: <ContactsSales />,
                            },
                            {
                                key: "pr",
                                label: "PR отдел",
                                children: <ContactsPr />,
                            },
                            {
                                key: "marketing",
                                label: "Маркетинг",
                                children: 1,
                            },
                            {
                                key: "accounting",
                                label: "Бухгалтерия",
                                children: 1,
                                disabled: true,
                            },
                        ]}
                    />
                </Container>
            </section>
            <Consultation title="Вопросы и пожелания" text="Если у Вас возникли вопросы или есть пожелания, вы можете оставить их ниже." />
        </Flex>
    );
};
