import { ConfigProvider, Flex, Select, Typography } from "antd";
import { ChevronDownIcon } from "../../../../icons";
import { Colors } from "../../../../types/Colors";
import { customSelectTags as selectTagsTheme } from "../config/index";
import { ICustomSelectTags } from "../model/customTags.model";
// import { useCustomSelectTags } from "../model/useCustomSelectTags";
import "./CustomSelectTags.scss";
import { useCustomSelectTags } from "../model/useCustomSelectTags";

const { Text } = Typography;

export const CustomSelectTags: React.FC<ICustomSelectTags> = (props) => {
    const { sharedProps, handleChange } = useCustomSelectTags(props);

    return (
        <ConfigProvider theme={selectTagsTheme}>
            <Flex vertical gap={10} className="custom-select-tags">
                <Text style={{ fontSize: 12, fontWeight: 400, color: Colors.gray600 }}>Проект</Text>
                <Select
                    {...sharedProps}
                    placeholder="Выберите"
                    options={
                        props.options?.map((option) => {
                            return {
                                value: option.id,
                                label: option.name,
                            };
                        }) || []
                    }
                    onChange={handleChange}
                    suffixIcon={<ChevronDownIcon />}
                    className="select-tags"
                />
            </Flex>
        </ConfigProvider>
    );
};
