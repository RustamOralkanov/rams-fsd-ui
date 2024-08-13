import { Mortgage } from "../../../entities/payments";

export const methods = [
    {
        key: "mortgage",
        label: "Ипотека",
        children: <Mortgage />,
    },
    {
        key: "installment",
        label: "Рассрочка",
        children: <Mortgage />,
    },
    {
        key: "trade-in",
        label: "Trade-in",
        children: <Mortgage />,
    },
    {
        key: "auto-trade-in",
        label: "Auto Trade-in",
        children: <Mortgage />,
    },
];
