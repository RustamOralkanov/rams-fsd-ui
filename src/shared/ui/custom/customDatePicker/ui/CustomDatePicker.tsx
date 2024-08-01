import React from "react";
import { DatePicker, Flex, Typography } from "antd";
import { OnChangeType } from "../../customSelect/model/customSelect.model";
const { Text } = Typography;

export const CustomDatePicker: React.FC<{ onChange?: OnChangeType }> = ({ onChange }) => {
    return (
        <Flex vertical style={{ position: "relative", minWidth: 300 }}>
            <Text style={{ position: "absolute", top: 5, zIndex: 2, left: 11, fontSize: 12, lineHeight: 1.6, color: "#6C6D6D" }}>Дата</Text>
            <DatePicker onChange={onChange} />
        </Flex>
    );
};
