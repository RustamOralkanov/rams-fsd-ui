import { Tabs } from "antd";
import { FlatsList } from "../../../../features/flats";
import { ParkingList } from "../../../../features/parking";
import { StorageList } from "../../../../features/storage";
import { Container } from "../../../../shared/ui/container";

export const FlatsPage = () => {
    return (
        <section>
            <Container>
                <Tabs
                    animated
                    items={[
                        { key: "1", label: "Квартиры", children: <FlatsList /> },
                        { key: "2", label: "Машино-места", children: <ParkingList /> },
                        { key: "3", label: "Кладовые", children: <StorageList /> },
                        { key: "4", label: "Коммерческое помещение", children: 1, disabled: true },
                    ]}
                />
            </Container>
        </section>
    );
};
