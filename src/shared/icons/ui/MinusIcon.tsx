import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const MinusSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 12L7 12" stroke="#2E3130" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const MinusIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={MinusSvg} {...props} />;
