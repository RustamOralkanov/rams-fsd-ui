import React from "react";
import { Flex, Slider, Typography, InputNumber, Form } from "antd";
import { useCustomSingleRange } from "../model/useCustomSingleRange";
import { ICustomSingleRange } from "../model/customSingleRange.model";
import "./СustomInputSingleRange.scss";

const { Text } = Typography;

export const CustomInputSingleRange: React.FC<ICustomSingleRange> = ({ onChange, title, max = 200, min = 0, is_percent, is_price, is_year }) => {
    const { status } = Form.Item.useStatus();
    const { value, handleInputChange, handleSliderChange } = useCustomSingleRange(onChange);

    return (
        <Flex vertical gap={5}>
            {title && <Text style={{ fontSize: 12 }}>{title}</Text>}
            <Flex className={["single-range", status].join(" ")}>
                <Flex align="center" justify="space-between" className="single-range-wrapper">
                    <InputNumber
                        formatter={(value) => `${value} ${is_year ? "лет" : ""}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                        controls={false}
                        value={value}
                        onChange={handleInputChange}
                    />
                    {is_percent && <Text>{((value / max) * 100).toFixed(0)}%</Text>}
                    {is_price && <Text>₸</Text>}
                </Flex>
                <Slider defaultValue={30} tooltip={{ open: false }} value={value} className="single-range-slider" onChange={handleSliderChange} max={max} min={min} />
            </Flex>
        </Flex>
    );
};
