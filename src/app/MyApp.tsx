import { ArrowRightOutlined } from "@ant-design/icons";
import { App, Form, FormProps, Switch } from "antd";
import { Button, Flex, Input } from "antd";
import { CustomSelect } from "../shared/ui/custom/customSelect";
import { CustomTextArea } from "../shared/ui/custom/customTextArea";
import { CustomDatePicker } from "../shared/ui/custom/customDatePicker";

export const MyApp = () => {
    const onFinish: FormProps["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    return (
        <App>
            <Flex gap={30} wrap>
                <Button type="default" shape="circle">
                    <ArrowRightOutlined />
                </Button>
                <Button type="primary">2</Button>
                <Button type="primary">3</Button>
                <Button type="primary">4</Button>

                <Form name="basic" onFinish={onFinish} autoComplete="off">
                    <Form.Item label="Input" name="input" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Select" name="select" rules={[{ required: true }]}>
                        <CustomSelect options={[{ label: "1", value: 1 }]} />
                    </Form.Item>
                    <Form.Item label="Textarea" name="text" rules={[{ required: true }]}>
                        <CustomTextArea />
                    </Form.Item>
                    <Form.Item label="Date" name="date" rules={[{ required: true }]}>
                        <CustomDatePicker />
                    </Form.Item>
                    <Form.Item label="Switch" name="switch" rules={[{ required: true }]}>
                        <Switch />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Flex>
        </App>
    );
};
