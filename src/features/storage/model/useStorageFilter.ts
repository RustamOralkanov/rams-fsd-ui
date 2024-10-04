import { Form } from "antd";
import { useEffect } from "react";
import { useGetFlatsFilterQuery } from "@/features/flats/api/flats.api";
import { IFlatsFilterValues } from "@/features/flats/model/flatsFilter.model";
import { FlatsFilterProps } from "@/features/flats/model/types/flatsFilter.model";

export const useStorageFilter = (props: FlatsFilterProps) => {
    const [form] = Form.useForm();
    const { data: filters, isLoading } = useGetFlatsFilterQuery({ property_type_id: props.type_id });

    const setFlatsFilterValues = () => {
        form.setFieldsValue({
            complex: filters?.complexes,
            size: filters?.sizes,
            features: filters?.complex_classes,
        });
    };

    useEffect(() => {
        setFlatsFilterValues();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    const onValuesChange = (_: unknown, allValues: IFlatsFilterValues) => {
        if (props.onFilterChange) {
            props.onFilterChange(allValues);
        }
    };

    const clearForm = () => {
        form.resetFields();
        setFlatsFilterValues();
        props.onFilterChange({} as IFlatsFilterValues);
    };

    return {
        form,
        onValuesChange,
        clearForm,
        filters,
    };
};
