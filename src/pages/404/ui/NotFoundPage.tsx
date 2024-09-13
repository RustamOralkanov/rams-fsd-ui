import { Button, Flex, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import NotFound from "@/app/assets/icons/services/404.svg";
import { APP_ROUTES } from "@/app/constants/router";
import { Footer } from "@/widgets/footer";
import { DesktopHeader } from "@/widgets/header";
import { Container } from "@/shared/ui";

export const NotFoundPage = () => {
    return (
        <>
            <DesktopHeader />
            <section style={{ padding: "100px 0" }}>
                <Container>
                    <Flex align="center" gap={140} justify="center">
                        <Image src={NotFound} preview={false} />
                        <Flex vertical gap={40} style={{ maxWidth: 380 }}>
                            <Typography.Title style={{ fontSize: 128, lineHeight: 0.7 }} className="color-green-100">
                                404
                            </Typography.Title>
                            <Flex vertical gap={12}>
                                <Typography.Title level={2}>Страница не найдена</Typography.Title>
                                <Typography.Text>Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.</Typography.Text>
                            </Flex>
                            <Link to={"/" + APP_ROUTES.FLATS}>
                                <Button type="primary">Выбрать квартиры</Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Container>
            </section>
            <Footer />
        </>
    );
};
