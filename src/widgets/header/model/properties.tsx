import type { TabsProps } from "antd";
import { ComplexesTab, FlatsTab, ParkingsTab } from "../../../entities/properties";

export const properties: TabsProps["items"] = [
    {
        key: "complexes",
        label: "Проекты",
        children: <ComplexesTab />,
    },
    {
        key: "flats",
        label: "Квартиры",
        children: <FlatsTab />,
    },
    {
        key: "parkings",
        label: "Машино-места",
        children: <ParkingsTab />,
    },
    {
        key: "storages",
        label: "Кладовые",
        children: "Content of Tab Pane 1",
    },
    {
        key: "commerce",
        label: "Коммерция",
        children: "Content of Tab Pane 1",
    },
];
