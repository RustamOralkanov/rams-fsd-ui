import { useCallback, useEffect, useState } from "react";
import { TimeRemaining } from "./countdown.model";

export const useCountdown = (targetDate: string) => {
    const calculateTimeRemaining = useCallback((): TimeRemaining => {
        const now = new Date();
        const target = new Date(targetDate);

        // Set the target time to 00:00 of the target day
        const targetMidnight = new Date(
            target.getFullYear(),
            target.getMonth(),
            target.getDate(), // Same day as the target date
            0,
            0,
            0,
            0 // Midnight
        );

        const difference = targetMidnight.getTime() - now.getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }, [targetDate]);

    const [timeRemaining, set_time_remaining] = useState<TimeRemaining>(calculateTimeRemaining);

    useEffect(() => {
        const intervalId = setInterval(() => {
            set_time_remaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [calculateTimeRemaining]);

    const formatTimeUnit = (unit: number): string => (unit < 10 ? `0${unit}` : unit.toString());

    return {
        timeRemaining,
        formatTimeUnit,
    };
};
