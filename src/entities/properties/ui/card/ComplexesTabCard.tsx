import { Flex, Image, Typography } from "antd";
import { Colors } from "../../../../shared/types/Colors";
import { FacingIcon } from "../../../../shared/icons";
import common from "../../../../shared/styles/common.module.scss";

const { Text, Title } = Typography;

const iconStyle = {
    backgroundColor: Colors.warning600,
    width: 24,
    height: 24,
    borderRadius: 50,
    zIndex: 2,
    right: 5,
    top: 5,
};

export const ComplexesTabCard = () => {
    return (
        <Flex gap={20} align="center">
            <Flex className={common.relative}>
                <Flex justify="center" align="center" style={iconStyle} className={common.absolute}>
                    <FacingIcon />
                </Flex>
                <Image
                    src="https://ramsqz.com/storage/complexes/banners/KqZO8K4TZjE6SXgRbSnWNhQR1un2YIANwidZvnSuMVTCfxKc6owJFPIj8MNts1wBNnrryMRhxHkbLdc5ZuG17hBfhnkpcOwv488T.jpg"
                    preview={false}
                    className={[common.cover, common["radius-10"]].join(" ")}
                    width={100}
                    height={100}
                />
            </Flex>

            <Flex vertical gap={10}>
                <Flex vertical>
                    <Title level={4}>RAMS Signature</Title>
                    <Text style={{ fontSize: 12, lineHeight: 1.3, color: Colors.gray300 }}>Сейфуллина / Аль Фараби</Text>
                </Flex>
                <Text>от 35 млн ₸</Text>
            </Flex>
        </Flex>
    );
};
