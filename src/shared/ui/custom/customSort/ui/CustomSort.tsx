import { Dropdown, Flex, MenuProps, Switch, Typography } from "antd";
import { useState } from "react";
import { ChevronDownIcon, SortIcon } from "../../../../icons";
import { ICustomSort } from "../model/customSort.model";

import "./CustomSort.scss";

const { Text } = Typography;

export const CustomSort: React.FC<ICustomSort> = ({ onChange }) => {
    const [is_group, set_is_group] = useState(false);
    const [sort_value, set_sort_value] = useState<{ value: string; label: string }>({ value: "ASC", label: "По возрастанию цены" });

    const items: MenuProps["items"] = [
        {
            key: "1",

            label: (
                <Flex align="center" justify="space-between" onClick={() => set_is_group(!is_group)} className="custom-sort-item">
                    <Text>Группировать по проекту</Text>
                    <Switch value={is_group} />
                </Flex>
            ),
        },
        {
            key: "2",
            label: (
                <Flex onClick={() => handleChange("ASC")} align="center" className={[sort_value.value === "ASC" ? "active" : "", "custom-sort-item"].join(" ")}>
                    По возрастанию цены
                </Flex>
            ),
        },
        {
            key: "3",
            label: (
                <Flex onClick={() => handleChange("DESC")} align="center" className={[sort_value.value === "DESC" ? "active" : "", "custom-sort-item"].join(" ")}>
                    По убыванию цены
                </Flex>
            ),
        },
    ];

    const handleChange = (value: string) => {
        if (value === "ASC") {
            set_sort_value({ label: "По возрастанию цены", value: value });
        } else {
            set_sort_value({ label: "По убыванию цены", value: value });
        }

        if (onChange) {
            onChange(value);
        }
    };

    return (
        <Dropdown menu={{ items }} placement="bottomLeft" className="custom-sort" trigger={["click"]} overlayClassName="custom-sort-wrapper">
            <Flex align="center" justify="space-between">
                <Flex align="center" gap={7}>
                    <SortIcon className="custom-sort-icon" />
                    <Text>{sort_value.label}</Text>
                </Flex>
                <ChevronDownIcon />
            </Flex>
        </Dropdown>
    );
};
