import { Button, Col, Flex, Row, Tabs } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "@/app/constants/router";
import { FlatCard } from "@/features/flats";
import { useGetFlatsTypesQuery } from "@/features/flats/api/flats.api";
import { ParkingCard } from "@/features/parking";
import { StorageCard } from "@/features/storage";
import { useAppSelector } from "@/shared/hooks/useRedux";
import { CompareIcon } from "@/shared/icons";
import { Container, CustomSort } from "@/shared/ui";

export const FavoritesPage = () => {
    const { favorites } = useAppSelector((state) => state.favorites);
    const { data } = useGetFlatsTypesQuery();
    const [sort, setSort] = useState<string>("ASC");

    const handleSort = (values: string) => {
        setSort(values);
    };

    return (
        <section>
            <Container>
                <Tabs
                    animated
                    tabBarExtraContent={
                        <Link to={APP_ROUTES.COMPARE}>
                            <Button style={{ outline: "20px solid #ffffff" }}>
                                <CompareIcon /> Сравнить
                            </Button>
                        </Link>
                    }
                    items={data?.map((type) => ({
                        key: type.alias,
                        label: (
                            <span>
                                {type.name} <sup>{favorites.filter((favorite) => favorite.property_type_id === type.id).length}</sup>
                            </span>
                        ),
                        children: (
                            <Flex vertical gap={20} className="flats-list-wrapper">
                                <CustomSort onChange={handleSort} />
                                <Row gutter={[20, 20]}>
                                    {favorites
                                        .filter((favorite) => favorite.property_type_id === type.id)
                                        .sort((a, b) => {
                                            const priceA = a.price || 0;
                                            const priceB = b.price || 0;

                                            if (sort === "ASC") {
                                                return priceA - priceB;
                                            } else if (sort === "DESC") {
                                                return priceB - priceA;
                                            }
                                            return 0;
                                        })
                                        .map((property, index) => (
                                            <Col key={index} xxl={type.alias !== "flats" ? 24 : 6} xl={type.alias !== "flats" ? 24 : 6}>
                                                {type.alias === "flats" ? (
                                                    <FlatCard {...property} />
                                                ) : type.alias === "parkings" ? (
                                                    <ParkingCard {...property} />
                                                ) : type.alias === "storerooms" ? (
                                                    <StorageCard {...property} />
                                                ) : null}
                                            </Col>
                                        ))}
                                </Row>
                            </Flex>
                        ),
                    }))}
                />
            </Container>
        </section>
    );
};
