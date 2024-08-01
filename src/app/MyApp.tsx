import { ArrowRightOutlined } from "@ant-design/icons";
import { App, Form, FormProps, Switch, Tabs } from "antd";
import { Button, Flex, Input } from "antd";
import { CustomSelect } from "../shared/ui/custom/customSelect";
import { CustomTextArea } from "../shared/ui/custom/customTextArea";
import { CustomDatePicker } from "../shared/ui/custom/customDatePicker";
import { CustomUpload } from "../shared/ui/custom/customUpload";
import { CustomTimePicker } from "../shared/ui/custom/customTimePicker";
import { FlatCard, FlatCardSmall } from "../entities/flat";

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
                <Tabs
                    items={[
                        {
                            key: "1",
                            label: "Первый",
                            children: (
                                <Form name="basic" onFinish={onFinish} autoComplete="off">
                                    <Form.Item name="input" rules={[{ required: true }]}>
                                        <Input placeholder="Input" />
                                    </Form.Item>
                                    <Form.Item name="select" rules={[{ required: true }]}>
                                        <CustomSelect options={[{ label: "1", value: 1 }]} />
                                    </Form.Item>
                                    <Form.Item name="text" rules={[{ required: true }]}>
                                        <CustomTextArea />
                                    </Form.Item>
                                    <Form.Item name="date" rules={[{ required: true }]}>
                                        <CustomDatePicker />
                                    </Form.Item>
                                    <Form.Item name="switch" rules={[{ required: true }]}>
                                        <Switch />
                                    </Form.Item>
                                    <Form.Item name="upload" rules={[{ required: true }]}>
                                        <CustomUpload />
                                    </Form.Item>
                                    <Form.Item name="time" rules={[{ required: true }]}>
                                        <CustomTimePicker />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            ),
                        },
                        {
                            key: "2",
                            label: "Второй",
                            children: (
                                <Flex gap={30}>
                                    <FlatCard />
                                    <FlatCardSmall />
                                </Flex>
                            ),
                        },
                        { key: "3", label: "Третий", children: "Третий" },
                    ]}
                />
            </Flex>
        </App>
    );
};
