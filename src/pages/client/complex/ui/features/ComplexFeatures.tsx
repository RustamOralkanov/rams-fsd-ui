import { Flex, Image, Typography } from "antd";
import { Colors } from "../../../../../shared/types/Colors";
import { Container } from "../../../../../shared/ui/container";
import "./ComplexFeatures.scss";

const features = [
    {
        title: "",
        description: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        image: "https://ramsqz.com/storage/complexes/edges/ZAQAqwHzyj4elyTAtt57WCWKKoHEQchQKqxffrnO.png",
        icon: "",
    },
    {
        title: "Korem ipsum",
        description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: "https://ramsqz.com/storage/complexes/edges/XYH417rbqF7NZlgBOQaSrrQ0hDSg0vlxwZjheP7m.png",
        icon: "",
    },
    {
        title: "Lorem ipsum",
        description:
            "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
        image: "",
        icon: "https://ramsqz.com/storage/complexes/edges/NAE4WgPypbWnhTZwJgewuMROKMbPiiZTOK5iOL5k.svg",
    },
    {
        title: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
            "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
        image: "",
        icon: "https://ramsqz.com/storage/complexes/edges/NAE4WgPypbWnhTZwJgewuMROKMbPiiZTOK5iOL5k.svg",
    },
    {
        title: "Korem ipsum dolor sit amet, consectetur ",
        description: "",
        image: "https://ramsqz.com/storage/complexes/edges/MSO5MZeqVvczedztIFJZKViIdMzg97maGQjrMUaY.png",
        icon: "",
    },
    {
        title: "Sorem ipsum",
        description: "",
        image: "https://ramsqz.com/storage/complexes/edges/MSO5MZeqVvczedztIFJZKViIdMzg97maGQjrMUaY.png",
        icon: "",
    },
    {
        title: "Norem ipsum dolor",
        description: "",
        image: "https://ramsqz.com/storage/complexes/edges/MSO5MZeqVvczedztIFJZKViIdMzg97maGQjrMUaY.png",
        icon: "",
    },
];

const { Text, Title } = Typography;

export const ComplexFeatures = () => {
    return (
        <section>
            <Container>
                <div className="complex-features">
                    {features.map((feature, index) => (
                        <div className={`feature-${index + 1}`} key={index} style={{ backgroundImage: `url(${feature.image})` }}>
                            {feature.icon && <Image src={feature.icon} preview={false} height={50} style={{ width: 50 }} />}
                            <Flex vertical>
                                {feature.title.length > 0 && (
                                    <Title
                                        level={3}
                                        style={{ marginBottom: feature.description.length > 0 ? 10 : 0, fontWeight: 400, color: feature.image ? Colors.white : Colors.gray900 }}
                                    >
                                        {feature.title}
                                    </Title>
                                )}
                                {feature.description.length > 0 && <Text style={{ color: feature.image ? Colors.white : Colors.gray900 }}>{feature.description}</Text>}
                            </Flex>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
