import { Button, Popover, Flex, ConfigProvider } from "antd";
import { useAppSelector } from "../../../shared/hooks/useRedux";
import { useDispatch } from "react-redux";
import { setLang } from "../model/reducer";

import "./LangSwitch.scss";
import { ChevronDownIcon } from "../../../shared/icons";
import { Colors } from "../../../shared/types/Colors";

const Langs = () => {
    const { options, currentLang } = useAppSelector((state) => state.languages);
    const dispatch = useDispatch();

    return (
        <Flex vertical gap={5} style={{ width: 60 }}>
            {options.map((option, index) => {
                if (currentLang !== option.lang) {
                    return (
                        <Flex key={index} className={["lang-option", option.active ? "active" : ""].join(" ")} onClick={() => dispatch(setLang(option.lang))}>
                            {option.lang}
                        </Flex>
                    );
                }
            })}
        </Flex>
    );
};

export const LangSwitch = () => {
    const { currentLang } = useAppSelector((state) => state.languages);
    return (
        <ConfigProvider
            theme={{
                components: {
                    Popover: {
                        colorBgElevated: Colors.gray,
                    },
                },
            }}
        >
            <Popover placement="bottom" content={<Langs />}>
                <Button type="link" className="lang-switch">
                    <Flex align="center" gap={7}>
                        {currentLang}
                        <ChevronDownIcon />
                    </Flex>
                </Button>
            </Popover>
        </ConfigProvider>
    );
};
