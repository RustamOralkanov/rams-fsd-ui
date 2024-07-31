import React from "react";
import { Flex, Select, Typography } from "antd";
import { ChevronDownIcon } from "../../../../icons";
import { ICustomSelect } from "../model/customSelect.model";
import { useCustomSelect } from "../model/useCustomSelect";

const { Text } = Typography;

export const CustomSelect: React.FC<ICustomSelect> = ({ onChange, options, placeholder }) => {
    const { handleChange } = useCustomSelect(onChange);
    return (
        <Flex vertical flex={1} style={{ position: "relative" }}>
            <Text style={{ fontSize: 12, color: "#6C6D6D", position: "absolute", zIndex: 2, left: 11, top: 6 }}>Text</Text>
            <Select placeholder={placeholder ? placeholder : "Выберите"} onChange={handleChange} suffixIcon={<ChevronDownIcon />} options={options} />
        </Flex>
    );
};
