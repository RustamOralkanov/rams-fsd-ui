import { Form } from "antd";
import { IStorageFilter } from "./storage.model";

export const useStorageFilter = () => {
    const [form] = Form.useForm();

    const onValuesChange = (_: unknown, allValues: IStorageFilter) => {
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
