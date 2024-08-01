export const createTimeIntervals = (startHour: number, endHour: number, intervalMinutes: number) => {
    const times = [];
    let currentDate = new Date();
    currentDate.setHours(startHour, 0, 0, 0);

    const endDate = new Date();
    endDate.setHours(endHour, 0, 0, 0);

    while (currentDate <= endDate) {
        const hours = currentDate.getHours().toString().padStart(2, "0");
        const minutes = currentDate.getMinutes().toString().padStart(2, "0");
        times.push(`${hours}:${minutes}`);
        currentDate.setMinutes(currentDate.getMinutes() + intervalMinutes);
    }

    return times;
};
