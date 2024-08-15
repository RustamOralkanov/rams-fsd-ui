import { ConfigProvider, Flex, Select, Typography } from "antd";
import { Colors } from "../../../../types/Colors";
import { ChevronDownIcon } from "../../../../icons";
import { ICustomSelectTags } from "../model/customTags.model";
import { useCustomSelectTags } from "../model/useCustomSelectTags";
import selectTagsTheme from "../config/customSelectTags.theme.json";
import "./CustomSelectTags.scss";

const { Text } = Typography;

export const CustomSelectTags: React.FC<ICustomSelectTags> = ({ onChange }) => {
    const { sharedProps, selectProps } = useCustomSelectTags(onChange);
    return (
        <ConfigProvider theme={selectTagsTheme}>
            <Flex vertical gap={10} className="custom-select-tags">
                <Text style={{ fontSize: 12, fontWeight: 300, color: Colors.gray600 }}>Проект</Text>
                <Select {...sharedProps} {...selectProps} suffixIcon={<ChevronDownIcon />} className="select-tags" />
            </Flex>
        </ConfigProvider>
    );
};
