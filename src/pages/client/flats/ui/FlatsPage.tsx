import { Tabs } from "antd";
import { Container } from "../../../../shared/ui/container";
import { FlatsList } from "../../../../features/flats";
import { ParkingList } from "../../../../features/parking";
import { StorageList } from "../../../../features/storage";

import "./FlatsPage.scss";

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
                    ]}
                />
            </Container>
        </section>
    );
};
