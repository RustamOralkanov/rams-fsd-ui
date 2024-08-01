import Icon from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const FileSvg = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.33325 1.5C9.4253 1.5 9.49992 1.57462 9.49992 1.66667V5.43137C9.49992 5.70752 9.72378 5.93137 9.99992 5.93137H12.9999C13.092 5.93137 13.1666 6.00599 13.1666 6.09804V12.6667C13.1666 13.6792 12.3458 14.5 11.3333 14.5H4.66658C3.65406 14.5 2.83325 13.6792 2.83325 12.6667V3.33333C2.83325 2.32081 3.65406 1.5 4.66659 1.5H9.33325Z"
            fill="#024638"
        />
        <path
            d="M10.724 1.75892C10.6283 1.68166 10.4999 1.75976 10.4999 1.88276V4.76471C10.4999 4.85675 10.5745 4.93137 10.6666 4.93137H12.8655C12.9439 4.93137 12.9934 4.84868 12.9477 4.78497L10.9389 1.98637C10.8771 1.90024 10.8047 1.824 10.724 1.75892Z"
            fill="#024638"
        />
    </svg>
);

export const FileIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={FileSvg} {...props} />;
