import { message } from "antd";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { UploadRequestOption } from "rc-upload/lib/interface";
import { useState } from "react";

export const useCustomUpload = (onChange?: (fileList: UploadFile[]) => void) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const customRequest = (options: UploadRequestOption) => {
        const { file, onSuccess } = options;
        const image = file as File;

        const maxSize = 5 * 1024 * 1024; // 5MB
        if (image.size > maxSize) {
            setFileList([]);
            if (onChange) {
                onChange([]);
            }
            return;
        } else {
            if (onSuccess) {
                onSuccess("ok");
            }
        }
    };

    const getBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const onUploadChange = async (info: UploadChangeParam<UploadFile>) => {
        let newFileList = [...info.fileList];

        newFileList = newFileList.filter((file) => {
            if (file.size! > 5 * 1024 * 1024) {
                message.error("Файл не должен превышать 5MB");
                return false;
            }
            return true;
        });

        for (const file of newFileList) {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj as File);
            }
        }

        setFileList(newFileList);

        if (onChange) {
            onChange(newFileList);
        }
    };

    const handleRemove = (file: UploadFile) => {
        const newFileList = fileList.filter((f) => f.uid !== file.uid);
        setFileList(newFileList);
        if (onChange) {
            onChange(newFileList);
        }
    };
    return {
        customRequest,
        onUploadChange,
        handleRemove,
        fileList,
    };
};
