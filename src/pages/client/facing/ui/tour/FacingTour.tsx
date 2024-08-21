import { Flex, Select, Tabs, Typography } from "antd";
import { ChevronDownIcon } from "../../../../../shared/icons";
import { Container } from "../../../../../shared/ui";
import "./FacingTour.scss";

const { Title } = Typography;

export const FacingTour = () => {
    return (
        <section className="facing-tour">
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>3D tour</Title>
                    <Flex align="flex-end" className="facing-tour-wrapper">
                        <Tabs
                            className="width-full"
                            items={[
                                {
                                    key: "draft",
                                    label: "Черновая",
                                    children: (
                                        <iframe
                                            allow="xr-spatial-tracking; gyroscope; accelerometer"
                                            src="https://kuula.co/share/collection/7J1Bz?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
                                            style={{ border: "unset", borderRadius: 20, aspectRatio: "12.4 / 5.5" }}
                                            width={"100%"}
                                        />
                                    ),
                                },
                                {
                                    key: "finishing",
                                    label: "Чистовая",
                                    children: (
                                        <iframe
                                            allow="xr-spatial-tracking; gyroscope; accelerometer"
                                            src="https://kuula.co/share/collection/7JDsb?logo=-1&info=0&fs=1&vr=1&sd=1&autorotate=0.08&autop=10&autopalt=1&thumbs=-1&alpha=0.60&inst=0"
                                            style={{ border: "unset", borderRadius: 20, aspectRatio: "12.4 / 5.5" }}
                                            width={"100%"}
                                        />
                                    ),
                                },
                                {
                                    key: "furniture",
                                    label: "С мебелью",
                                    children: (
                                        <iframe
                                            allow="xr-spatial-tracking; gyroscope; accelerometer"
                                            src="https://kuula.co/share/collection/7JGNw?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1"
                                            style={{ border: "unset", borderRadius: 20, aspectRatio: "12.4 / 5.5" }}
                                            width={"100%"}
                                        />
                                    ),
                                },
                            ]}
                        />
                        <Select
                            className="facing-tour-select"
                            suffixIcon={<ChevronDownIcon />}
                            style={{ width: 190 }}
                            options={[
                                {
                                    label: "RAMS Signature",
                                    value: "signature",
                                },
                            ]}
                            defaultValue={"signature"}
                        />
                    </Flex>
                </Flex>
            </Container>
        </section>
    );
};
