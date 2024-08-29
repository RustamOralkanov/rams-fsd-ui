import { Form, FormProps } from "antd";
import { setView } from "@/features/flats/model/reducer";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useRedux";

export const useComplexFlats = () => {
    const dispatch = useAppDispatch();
    const { view } = useAppSelector((state) => state.view);
    const [form] = Form.useForm();

    const onFinish: FormProps["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    const setFlatView = (value: "rows" | "layout") => {
        dispatch(setView(value));
    };

    return {
        form,
        view,
        setFlatView,
        onFinish,
    };
};
