import { Col, Row, Tabs, Flex, Spin } from "antd";
import { Container } from "../../../shared/ui/container";
import { useGetComplexesQuery } from "../api/complexes.api";
import { useComplexes } from "../model/useComplexes";
import { ComplexBanner } from "./banner/ComplexBanner";
import { ComplexCard } from "./card/ComplexCard";
import { ComplexFilter } from "./filter/ComplexFilter";

export const Complexes = () => {
    const { handleTab, complexesStatus, complexProps, handleFilterChange } = useComplexes();
    const { data, isSuccess, isFetching, isLoading } = useGetComplexesQuery({ status: complexesStatus, ...complexProps });

    return (
        <section>
            <Container>
                <Tabs
                    activeKey={complexesStatus}
                    onChange={handleTab}
                    animated
                    items={[
                        {
                            key: "on_sale",
                            label: "В продаже",
                            children: (
                                <Flex vertical gap={40}>
                                    <ComplexFilter onFilterChange={handleFilterChange} />
                                    {isSuccess && (
                                        <Spin spinning={isFetching || isLoading}>
                                            <Row gutter={[20, 40]}>
                                                {data.map((complex, index) => {
                                                    if (complex.is_primary === 0) {
                                                        return (
                                                            <Col xl={8} key={index}>
                                                                <ComplexCard {...complex} />
                                                            </Col>
                                                        );
                                                    } else {
                                                        return (
                                                            <Col xl={16} key={index}>
                                                                <ComplexBanner {...complex} />
                                                            </Col>
                                                        );
                                                    }
                                                })}
                                            </Row>
                                        </Spin>
                                    )}
                                </Flex>
                            ),
                        },
                        {
                            key: "done",
                            label: "Построенные",
                            children: (
                                <Flex vertical gap={40}>
                                    {isSuccess && (
                                        <Spin spinning={isFetching || isLoading}>
                                            <Row gutter={[20, 40]}>
                                                {data.map((complex, index) => {
                                                    if (complex.is_primary === 0) {
                                                        return (
                                                            <Col xl={8} key={index}>
                                                                <ComplexCard {...complex} />
                                                            </Col>
                                                        );
                                                    } else {
                                                        return (
                                                            <Col xl={16} key={index}>
                                                                <ComplexBanner {...complex} />
                                                            </Col>
                                                        );
                                                    }
                                                })}
                                            </Row>
                                        </Spin>
                                    )}
                                </Flex>
                            ),
                        },
                    ]}
                />
            </Container>
        </section>
    );
};
