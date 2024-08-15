import { Form, FormProps } from "antd";

export const useFlatsFilter = () => {
    const [form] = Form.useForm();

    const onFinish: FormProps["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    return {
        onFinish,
        form,
    };
};
