import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const CheckCircleSvg = () => (
    <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 6.5L5 8L8.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CheckCircleIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={CheckCircleSvg} {...props} />;
