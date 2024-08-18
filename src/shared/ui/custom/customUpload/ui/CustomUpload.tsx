import { Flex, Form, Upload, Typography } from "antd";
import { UploadFile } from "antd/es/upload";
import { InfoIcon, FolderIcon, FileIcon, CancelIcon } from "../../../../icons";
import { useCustomUpload } from "../model/useCustomUpload";

import "./CustomUpload.scss";

const { Text, Title } = Typography;

export const CustomUpload: React.FC<{ onChange?: (fileList: UploadFile[]) => void }> = ({ onChange }) => {
    const { fileList, onUploadChange, customRequest, handleRemove } = useCustomUpload(onChange);
    const { status } = Form.Item.useStatus();

    return (
        <Flex vertical gap={12}>
            <Flex gap={8} vertical>
                <Upload
                    name="images"
                    listType="picture"
                    accept="image/png, image/jpeg"
                    className={["custom-upload", status].join(" ")}
                    multiple
                    fileList={fileList}
                    customRequest={customRequest}
                    onChange={onUploadChange}
                    showUploadList={{
                        showPreviewIcon: false,
                        showRemoveIcon: true,
                    }}
                >
                    <Flex vertical justify="center" align="center" className="custom-upload-button">
                        <FolderIcon style={{ marginBottom: 5 }} />
                        <Title level={5} style={{ color: "#024638" }}>
                            Загрузите изображение
                        </Title>
                        <Text type="secondary" style={{ fontSize: 12, lineHeight: 1.33 }}>
                            или перетащите файл сюда
                        </Text>
                    </Flex>
                </Upload>
                <Flex align="center" gap={5}>
                    <InfoIcon style={{ color: "#6C6D6D" }} />
                    <Text style={{ color: "#6C6D6D", fontSize: 10, lineHeight: 1.4 }}>Description</Text>
                </Flex>
            </Flex>
            <Flex gap={10} vertical>
                {fileList.map((file) => (
                    <Flex key={file.uid} className="custom-upload-file" align="space-between" vertical>
                        <Flex justify="space-between" flex={1}>
                            <Flex gap={12} align="center">
                                <Flex justify="center" align="center" className="custom-upload-file-icon">
                                    <FileIcon />
                                </Flex>
                                <Flex vertical>
                                    <Text>{file.name}</Text>
                                    <Text style={{ color: "#6C6D6D", fontSize: 12 }}>{file.size ? (file.size / (1024 * 1024)).toFixed(2) + " МБ" : "n/d"}</Text>
                                </Flex>
                            </Flex>
                            <CancelIcon style={{ color: "#6C6D6D" }} onClick={() => handleRemove(file)} />
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};
