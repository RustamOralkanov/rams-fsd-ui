import { useState } from "react";
import { ComplexParams } from "./types/complex";

export const useComplexes = () => {
    const [complexProps, setComplexProps] = useState<ComplexParams>({});
    const [complexesStatus, setComplexesStatus] = useState<string>("on_sale");

    const handleTab = (key: string) => {
        setComplexesStatus(key);
        setComplexProps({});
    };

    const handleFilterChange = (values: ComplexParams) => {
        setComplexProps(values);
        return values;
    };

    return {
        complexesStatus,
        handleTab,
        complexProps,
        handleFilterChange,
    };
};
