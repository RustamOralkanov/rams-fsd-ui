import { Flex } from "antd";
import { Banner, Container } from "../../../../shared/ui";

export const FacingPage = () => {
    return (
        <Container>
            <Flex vertical gap={80}>
                <Banner />
            </Flex>
        </Container>
    );
};
