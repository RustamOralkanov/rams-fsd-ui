import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const InfoSvg = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.00008 7.1665C8.27622 7.1665 8.50008 7.39036 8.50008 7.6665V10.9998C8.50008 11.276 8.27622 11.4998 8.00008 11.4998C7.72394 11.4998 7.50008 11.276 7.50008 10.9998V7.6665C7.50008 7.39036 7.72394 7.1665 8.00008 7.1665Z"
            fill="currentColor"
        />
        <path
            d="M8.00008 5.99984C8.36827 5.99984 8.66675 5.70136 8.66675 5.33317C8.66675 4.96498 8.36827 4.6665 8.00008 4.6665C7.63189 4.6665 7.33341 4.96498 7.33341 5.33317C7.33341 5.70136 7.63189 5.99984 8.00008 5.99984Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.16675 7.99984C2.16675 4.77818 4.77842 2.1665 8.00008 2.1665C11.2217 2.1665 13.8334 4.77818 13.8334 7.99984C13.8334 11.2215 11.2217 13.8332 8.00008 13.8332C4.77842 13.8332 2.16675 11.2215 2.16675 7.99984ZM8.00008 3.1665C5.3307 3.1665 3.16675 5.33046 3.16675 7.99984C3.16675 10.6692 5.3307 12.8332 8.00008 12.8332C10.6695 12.8332 12.8334 10.6692 12.8334 7.99984C12.8334 5.33046 10.6695 3.1665 8.00008 3.1665Z"
            fill="currentColor"
        />
    </svg>
);

export const InfoIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={InfoSvg} {...props} />;
