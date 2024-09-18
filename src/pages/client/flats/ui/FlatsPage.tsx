import { Tabs } from "antd";
import { useState } from "react";
import { FlatsList } from "@/features/flats";
import { useGetFlatsTypesQuery } from "@/features/flats/api/flats.api";
import { ParkingList } from "@/features/parking";
import { StorageList } from "@/features/storage";
import { Container } from "@/shared/ui";

export const FlatsPage = () => {
    const { data } = useGetFlatsTypesQuery();
    const [propertiesType, setPropertiesType] = useState<string>("flats");

    const handleTab = (value: string) => {
        setPropertiesType(value);
    };

    const renderTabContent = (type: { alias: string; id: number }) => {
        switch (type.alias) {
            case "flats":
                return <FlatsList type={type.id} />;
            case "parkings":
                return <ParkingList type={type.id} />;
            case "storerooms":
                return <StorageList />;
            default:
                return null;
        }
    };

    const tabItems = data?.map((type) => ({
        key: type.alias,
        label: (
            <span>
                {type.name}
                <sup>{type.properties_count}</sup>
            </span>
        ),
        children: renderTabContent(type),
    }));

    return (
        <section>
            <Container>
                <Tabs activeKey={propertiesType} onChange={handleTab} animated items={tabItems} />
            </Container>
        </section>
    );
};
