import { useState } from "react";

export const useComplexes = () => {
    const [complexesStatus, setComplexesStatus] = useState<string>("on_sale");
    const handleTab = (key: string) => {
        setComplexesStatus(key);
    };
    return {
        complexesStatus,
        handleTab,
    };
};
