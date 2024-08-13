import { Form, type FormProps } from "antd";
import { useState } from "react";

export const useFilter = () => {
    const filter_labels = ["Со скидкой", "Старт продаж", "Премиум", "Комфорт", "Бизнес"];
    const [form] = Form.useForm();
    const [labels, set_labels] = useState<string[]>([]);

    const handleLabels = (value: string) => {
        let newLabels;
        if (!labels.includes(value)) {
            newLabels = [...labels, value];
        } else {
            newLabels = labels.filter((flat) => flat !== value);
        }
        set_labels(newLabels);
    };

    const onFinish: FormProps["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    const clearFilter = () => {
        set_labels([]);
        form.resetFields();
    };

    return {
        form,
        labels,
        filter_labels,
        onFinish,
        handleLabels,
        clearFilter,
    };
};
