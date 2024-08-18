import { Flex, Typography } from "antd";
import { CSSProperties } from "react";
import { Colors } from "../../../../../../shared/types/Colors";
import { CountdownTimerProps } from "../../../model/countdown.model";
import { useCountdown } from "../../../model/useCountdown";

const { Text } = Typography;

const textStyles: CSSProperties = {
    fontSize: 10,
    lineHeight: 1.6,
    color: Colors.white,
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const { timeRemaining, formatTimeUnit } = useCountdown(targetDate);
    return (
        <Flex flex={1} justify="center" align="center" gap={5} style={{ color: Colors.white }}>
            <Flex vertical align="center">
                <Text style={{ color: Colors.white }}>{formatTimeUnit(timeRemaining.days)}</Text>
                <Text style={{ ...textStyles }}>дней</Text>
            </Flex>
            :
            <Flex vertical align="center">
                <Text style={{ color: Colors.white }}>{formatTimeUnit(timeRemaining.hours)}</Text>
                <Text style={{ ...textStyles }}>часов</Text>
            </Flex>
            :
            <Flex vertical align="center">
                <Text style={{ color: Colors.white }}>{formatTimeUnit(timeRemaining.minutes)}</Text>
                <Text style={{ ...textStyles }}>минут</Text>
            </Flex>
            :
            <Flex vertical align="center">
                <Text style={{ color: Colors.white }}>{formatTimeUnit(timeRemaining.seconds)}</Text>
                <Text style={{ ...textStyles }}>секунд</Text>
            </Flex>
        </Flex>
    );
};
