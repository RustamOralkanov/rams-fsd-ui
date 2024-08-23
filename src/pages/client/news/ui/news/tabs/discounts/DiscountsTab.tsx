import { Col, Row } from "antd";
import { NewsCard } from "@/entities/news";

export const DiscountsTab = () => {
    return (
        <Row gutter={[20, 40]}>
            {[...Array(9)].map((_, index) => (
                <Col xxl={6} xl={8} key={index}>
                    <NewsCard />
                </Col>
            ))}
        </Row>
    );
};
