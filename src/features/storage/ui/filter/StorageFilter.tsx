import { Col, Flex, Form, Row, Typography } from "antd";
import { FlatsFilterProps } from "@/features/flats/model/types/flatsFilter.model";
import { Colors } from "@/shared/types/Colors";
import { ClearButton, CustomInputRange, CustomSelectTags } from "@/shared/ui";
import { useStorageFilter } from "../../model/useStorageFilter";

const { Text } = Typography;

export const StorageFilter: React.FC<FlatsFilterProps> = (props) => {
    const { form, onValuesChange, clearForm, filters } = useStorageFilter(props);
    return (
        <Form onValuesChange={onValuesChange} form={form} name="storage-filter">
            <Row gutter={[20, 20]} align={"bottom"}>
                <Col xl={6}>
                    <Form.Item name={"complex"}>
                        <CustomSelectTags options={filters?.complexes || []} />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"size"}>
                        <CustomInputRange
                            title="Общая площадь"
                            min={filters?.sizes[0]}
                            max={filters?.sizes[1]}
                            unit={
                                <span>
                                    м<sup>2</sup>
                                </span>
                            }
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Flex justify={"space-between"} align="center">
                        <Text className="flats-count">
                            Найдено <b style={{ color: Colors.green600, fontWeight: 600 }}>{filters?.count}</b> планировок
                        </Text>
                        <ClearButton onClick={clearForm} />
                    </Flex>
                </Col>
            </Row>
        </Form>
    );
};
