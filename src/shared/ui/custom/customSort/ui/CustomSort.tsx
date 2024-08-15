import { ConfigProvider, Flex, Select } from "antd";
import { ChevronDownIcon, SortIcon } from "../../../../icons";
import { ICustomSort } from "../model/customSort.model";
import theme from "../config/customSort.theme.json";
import "./CustomSort.scss";

export const CustomSort: React.FC<ICustomSort> = ({ onChange }) => {
    return (
        <ConfigProvider theme={theme}>
            <Flex className="custom-sort">
                <SortIcon className="custom-sort-icon" />
                <Select
                    defaultValue={"ASC"}
                    className="custom-sort-select"
                    suffixIcon={<ChevronDownIcon />}
                    options={[
                        { label: "Сначала дешевле", value: "ASC" },
                        { label: "Сначала дороже", value: "DESC" },
                    ]}
                    onChange={onChange}
                />
            </Flex>
        </ConfigProvider>
    );
};
