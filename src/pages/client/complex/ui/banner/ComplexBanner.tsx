import common from "@styles/common.module.scss";
import { Button, Flex, Image, Typography } from "antd";
import { Colors } from "../../../../../shared/types/Colors";
import { Container } from "../../../../../shared/ui/container";
import { CountdownTimer } from "./timer/CountdownTimer";
import "./ComplexBanner.scss";

const { Text, Title } = Typography;

export const ComplexBanner = () => {
    return (
        <section className="complex-banner">
            <Container>
                <Flex vertical style={{ padding: "100px 105px" }} className={[common.relative, common["radius-16"], common.hidden, "complex-banner-wrapper"].join(" ")}>
                    <div className="complex-banner-image">
                        <Image
                            src={"https://ramsqz.com/storage/complexes/banners/IAbQsqK4BAt4WQTbnupeAbkIev7PDOZcJCupqp9B.jpg"}
                            preview={false}
                            height={"100%"}
                            width={"100%"}
                            className={common.cover}
                        />
                    </div>
                    <Flex vertical gap={10} className={common.absolute} style={{ bottom: 30, right: 30 }} align="flex-end">
                        <Flex gap={10} align="center" className={[common["radius-7"], "blured-bg"].join(" ")} style={{ padding: "5px 10px" }}>
                            🔥
                            <Text style={{ fontSize: 12, color: Colors.white }}>Осталось всего 15 квартир</Text>
                        </Flex>
                        <Flex gap={15} align="center" className={[common["radius-12"], "blured-bg"].join(" ")} style={{ padding: "13px 15px" }}>
                            <Text style={{ fontSize: 13, lineHeight: 1.25, color: Colors.white }}>
                                До старта <br /> продаж
                            </Text>
                            <span style={{ height: 33, width: 1, backgroundColor: Colors.gray500, display: "block" }} />
                            <CountdownTimer targetDate="2024-09-14" />
                        </Flex>
                    </Flex>
                    <Flex vertical gap={30} style={{ maxWidth: 520, zIndex: 3 }}>
                        <Flex vertical gap={10}>
                            <Title level={2} style={{ color: Colors.white }}>
                                Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Title>
                            <Text style={{ color: Colors.white }}>Borem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </Flex>
                        <Button style={{ width: "fit-content" }} className="white-button">
                            Morem ipsum
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </section>
    );
};
