import React, { useState } from "react";
import { Col, Row, Slider, Typography, Flex, InputNumber, Form } from "antd";
import { Colors } from "../../../../types/Colors";
import "./CustomInputRange.scss";

const { Text } = Typography;

export const CustomInputRange: React.FC<{ onChange?: (value: number[]) => void; title?: string }> = ({ onChange, title }) => {
    const [range, set_range] = useState<number[]>([0, 999999999]);
    const { status } = Form.Item.useStatus();

    const handleSliderChange = (values: number[]) => {
        set_range(values);
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
            <Flex className={`custom-input-range ${status}`} vertical justify="center">
                <Row>
                    <Col span={12} className="divider">
                        <Flex align="center" gap={5}>
                            <Text style={{ whiteSpace: "nowrap" }}>от</Text>
                            <InputNumber
                                value={range[0]}
                                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                                controls={false}
                                onChange={handleMinInputChange}
                            />
                        </Flex>
                    </Col>
                    <Col span={12}>
                        <Flex align="center" justify="flex-end" gap={5}>
                            <Text>до</Text>
                            <InputNumber
                                value={range[1]}
                                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                                controls={false}
                                onChange={handleMaxInputChange}
                            />
                            <Text>₸</Text>
                        </Flex>
                    </Col>
                </Row>
                <Slider range value={range} className="custom-input-range-slider" onChange={handleSliderChange} min={0} max={999999999} tooltip={{ open: false }} />
            </Flex>
        </Flex>
    );
};
