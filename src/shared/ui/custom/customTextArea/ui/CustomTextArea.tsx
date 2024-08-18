import { Flex, Input, Typography } from "antd";
import { CheckCircleIcon } from "../../../../icons";
import { OnChangeType } from "../../customSelect/model/customSelect.model";
import { useCustomTextArea } from "../model/useCustomTextArea";

const { TextArea } = Input;
const { Text } = Typography;

export const CustomTextArea: React.FC<{ onChange?: OnChangeType }> = ({ onChange }) => {
    const { value, handleChange } = useCustomTextArea(onChange);

    return (
        <Flex vertical flex={1} gap={5}>
            <TextArea maxLength={100} onChange={(e) => handleChange(e.target.value)} placeholder="Введите текст" />
            <Flex align="center" gap={5}>
                <CheckCircleIcon style={{ fontSize: 12, color: "#34D399" }} />
                <Flex>
                    <Text style={{ fontSize: 10, color: "#6C6D6D", lineHeight: 1.4 }}>{value.size}/100</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
