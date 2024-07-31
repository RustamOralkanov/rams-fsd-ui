import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const CancelSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.46445 15.5354L15.5355 8.46436" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.46446 8.46458L15.5355 15.5356" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const CancelIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={CancelSvg} {...props} />;
