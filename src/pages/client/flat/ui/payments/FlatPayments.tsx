import { Button, Flex, Radio, RadioChangeEvent, Typography } from "antd";
import { useState } from "react";
import { Colors } from "../../../../../shared/types/Colors";
import { flatPayments } from "../../model/flatPayments.data";
import "./FlatPayments.scss";

const { Text, Title } = Typography;

export const FlatPayments = () => {
    const [value, setValue] = useState("cash");

    const onChange = (e: RadioChangeEvent) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    return (
        <Radio.Group onChange={onChange} value={value}>
            <Flex vertical gap={10}>
                {flatPayments.map((payment) => (
                    <Radio value={payment.value} key={payment.value} className={["flats-payment", value === payment.value ? "active" : ""].join(" ")}>
                        <Flex vertical gap={10}>
                            <Flex align="center" gap={20}>
                                <Flex vertical>
                                    <Title level={5} style={{ color: Colors.green500 }}>
                                        {payment.title}
                                    </Title>
                                    <Text>{payment.subtitle}</Text>
                                </Flex>
                                {payment.value === "cash" && <div className="flats-payment-discount">от 9 %</div>}
                            </Flex>

                            <Text style={{ color: Colors.gray500, fontSize: 10, lineHeight: 1.2 }}>{payment.description}</Text>
                            {payment.value !== "cash" && (
                                <Button block type="primary" disabled>
                                    Рассчитать
                                </Button>
                            )}
                        </Flex>
                    </Radio>
                ))}
            </Flex>
        </Radio.Group>
    );
};
