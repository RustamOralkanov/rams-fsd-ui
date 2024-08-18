import common from "@styles/common.module.scss";
import { Button, Flex, Image } from "antd";
import "./FlatImage.scss";

export const FlatImage = () => {
    return (
        <Flex vertical className="flat-image">
            <Flex gap={10} align="center">
                <Button type="primary" disabled>
                    Планировка
                </Button>
                <Button disabled type="default">
                    На этаже
                </Button>
            </Flex>
            <Flex className="flat-image-wrapper">
                <Image src="https://ramsqz.com/storage/flats/main/bf70df52228f85077e81bf67fd6d304e.jpg" preview={false} height={"100%"} width={"100%"} className={common.contain} />
            </Flex>
        </Flex>
    );
};
