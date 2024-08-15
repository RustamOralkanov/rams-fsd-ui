import { Form } from "antd";
import { IParkingFilterProps } from "./parking.model";

export const useParkingFilter = () => {
    const [form] = Form.useForm();

    const onValuesChange = (_: unknown, allValues: IParkingFilterProps) => {
        console.log("Form values changed:", allValues);
    };

    const clearForm = () => {
        form.resetFields();
    };

    return {
        form,
        onValuesChange,
        clearForm,
    };
};
