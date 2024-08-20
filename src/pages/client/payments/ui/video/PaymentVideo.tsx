import { Button, Flex, Typography } from "antd";
import { PlayIcon } from "../../../../../shared/icons";
import { Colors } from "../../../../../shared/types/Colors";
import { Container } from "../../../../../shared/ui";
import "./PaymentVideo.scss";

const { Title, Text } = Typography;

export const PaymentVideo = () => {
    return (
        <section className="payment-video">
            <Container>
                <Flex vertical gap={40}>
                    <Flex justify="space-between" align="flex-end">
                        <Flex vertical gap={10}>
                            <Title level={2}>Как это работает</Title>
                            <Text style={{ color: Colors.gray500 }}>Пять простых шагов чтобы купить свою квартиру</Text>
                        </Flex>
                        <Button>
                            <PlayIcon /> Смотреть видео
                        </Button>
                    </Flex>

                    <iframe
                        className="payment-video-wrapper"
                        src="https://www.youtube.com/embed/WAdmHNwwL1E"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ aspectRatio: "12.4 / 5.5" }}
                    />
                </Flex>
            </Container>
        </section>
    );
};
