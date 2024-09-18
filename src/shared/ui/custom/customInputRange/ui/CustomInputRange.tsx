import { Slider, Typography, Flex, InputNumber, Form } from "antd";
import React, { useEffect, useState } from "react";
import { Colors } from "../../../../types/Colors";
import { CustomInputRangeProps } from "../model/types";
import "./CustomInputRange.scss";

const { Text } = Typography;

export const CustomInputRange: React.FC<CustomInputRangeProps> = ({ onChange, title, value = [0, 99], unit = "₸", min, max }) => {
    const [range, set_range] = useState<number[]>(value);
    const { status } = Form.Item.useStatus();

    useEffect(() => {
        if (range[0] !== value[0] || range[1] !== value[1]) {
            set_range(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const handleSliderChange = (values: number[]) => {
        set_range(values);
    };

    const handleSliderAfterChange = (values: number[]) => {
        if (onChange) {
            onChange(values);
        }
    };

    const handleMinInputChange = (value: number | null) => {
        if (value !== null) {
            const newRange: [number, number] = [value, range[1]];
            set_range(newRange);
            if (onChange) {
                onChange(newRange);
            }
        }
    };

    const handleMaxInputChange = (value: number | null) => {
        if (value !== null) {
            const newRange: [number, number] = [range[0], value];
            set_range(newRange);
            if (onChange) {
                onChange(newRange);
            }
        }
    };

    return (
        <Flex vertical gap={10}>
            {title && <Text style={{ fontSize: 12, fontWeight: 400, color: Colors.gray600 }}>{title}</Text>}
            <Flex className={`custom-input-range ${status}`} align="center">
                <Flex align="center" gap={7} className="values">
                    <Text style={{ whiteSpace: "nowrap" }}>от</Text>
                    <InputNumber value={range[0]} formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} controls={false} onChange={handleMinInputChange} />
                </Flex>
                <div className="divider" />
                <Flex align="center" gap={7} className="values">
                    <Text>до</Text>
                    <InputNumber value={range[1]} formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} controls={false} onChange={handleMaxInputChange} />
                </Flex>
                <Text className="unit">{unit}</Text>
                <Slider
                    range
                    value={range}
                    className="custom-input-range-slider"
                    onChange={handleSliderChange}
                    onChangeComplete={handleSliderAfterChange}
                    min={min}
                    max={max}
                    // tooltip={{ open: false }}
                />
            </Flex>
        </Flex>
    );
};
