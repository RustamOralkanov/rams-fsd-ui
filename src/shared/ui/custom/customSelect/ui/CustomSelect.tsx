import { Flex, Select, Typography } from "antd";
import { ChevronDownIcon } from "../../../../icons";
import { ICustomSelect } from "../model/customSelect.model";
import { useCustomSelect } from "../model/useCustomSelect";

import "./CustomSelect.scss";

const { Text } = Typography;

export const CustomSelect: React.FC<ICustomSelect> = (props) => {
    const { handleChange } = useCustomSelect(props.onChange);

    return (
        <Flex vertical flex={1} style={{ position: "relative" }} className="custom-select">
            <Text style={{ fontSize: 12, color: "#6C6D6D", position: "absolute", zIndex: 9, left: 11, top: 4 }}>{props.title ? props.title : "Title"}</Text>
            <Select
                placeholder={props.placeholder ? props.placeholder : "Выберите"}
                onChange={handleChange}
                suffixIcon={<ChevronDownIcon />}
                options={
                    props.options &&
                    props.options.map((option: { name: unknown; id: unknown }) => {
                        return {
                            label: option.name,
                            value: option.id,
                        };
                    })
                }
            />
        </Flex>
    );
};
