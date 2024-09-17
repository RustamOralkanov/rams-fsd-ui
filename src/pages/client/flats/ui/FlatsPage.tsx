import { Tabs } from "antd";
import { FlatsList } from "@/features/flats";
import { useGetFlatsFilterQuery } from "@/features/flats/api/flats.api";
import { ParkingList } from "@/features/parking";
import { StorageList } from "@/features/storage";
import { Container } from "@/shared/ui";

export const FlatsPage = () => {
    const { data } = useGetFlatsFilterQuery();

    return (
        <section>
            <Container>
                <Tabs
                    animated
                    items={data?.property_types.map((type) => {
                        return {
                            key: type.alias,
                            label: type.name,
                            children:
                                type.alias === "flats" ? (
                                    <FlatsList type={type.id} />
                                ) : type.alias === "parkings" ? (
                                    <ParkingList />
                                ) : type.alias === "storerooms" ? (
                                    <StorageList />
                                ) : (
                                    1
                                ),
                        };
                    })}
                />
            </Container>
        </section>
    );
};
