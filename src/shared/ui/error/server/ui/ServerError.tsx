import { Button, Flex, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import ServerErrorImage from "@/app/assets/icons/services/500.svg";
import { APP_ROUTES } from "@/app/constants/router";
import { Container } from "@/shared/ui/container";

export const ServerError = () => {
    return (
        <section style={{ padding: "100px 0" }}>
            <Container>
                <Flex align="center" gap={140} justify="center">
                    <Image src={ServerErrorImage} preview={false} />
                    <Flex vertical gap={40} style={{ maxWidth: 380 }}>
                        <Typography.Title style={{ fontSize: 128, lineHeight: 0.7 }} className="color-green-100">
                            500
                        </Typography.Title>
                        <Flex vertical gap={12}>
                            <Typography.Title level={2}>Ошибка сервера</Typography.Title>
                            <Typography.Text>На сервере произошла непредвиденная ошибка. Пожалуйста подождите</Typography.Text>
                        </Flex>
                        <Link to={"/" + APP_ROUTES.HOME}>
                            <Button type="primary">На главную страницу</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </section>
    );
};
