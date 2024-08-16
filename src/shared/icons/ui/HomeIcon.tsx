import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const HomeSvg = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.03924 3.68941C8.45886 3.1325 7.54252 3.1325 6.96214 3.68941L3.87785 6.64896C3.80228 6.72148 3.75145 6.81593 3.73256 6.91895C3.36314 8.93352 3.33587 10.9959 3.6519 13.0196L3.72691 13.4999H5.71122V9.35902C5.71122 9.08288 5.93508 8.85902 6.21122 8.85902H9.79017C10.0663 8.85902 10.2902 9.08288 10.2902 9.35902V13.4999H12.2745L12.3495 13.0196C12.6655 10.9959 12.6382 8.93352 12.2688 6.91895C12.2499 6.81593 12.1991 6.72148 12.1235 6.64896L9.03924 3.68941ZM6.26978 2.96786C7.23708 2.03968 8.76431 2.03968 9.73161 2.96786L12.8159 5.92742C13.0429 6.14528 13.1957 6.42907 13.2524 6.73858C13.6421 8.86366 13.6709 11.0392 13.3375 13.1739L13.217 13.9455C13.1672 14.2646 12.8923 14.4999 12.5693 14.4999H9.79017C9.51402 14.4999 9.29017 14.276 9.29017 13.9999V9.85902H6.71122V13.9999C6.71122 14.276 6.48736 14.4999 6.21122 14.4999H3.43207C3.10908 14.4999 2.83422 14.2646 2.78438 13.9455L2.66388 13.1739C2.33051 11.0392 2.35928 8.86366 2.74896 6.73858C2.80572 6.42907 2.95844 6.14528 3.18549 5.92742L6.26978 2.96786Z"
            fill="#F5F8F7"
        />
    </svg>
);

export const HomeIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={HomeSvg} {...props} />;
