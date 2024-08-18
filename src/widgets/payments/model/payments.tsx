import { Installment, Mortgage } from "../../../entities/payments";

export const methods = [
    {
        key: "mortgage",
        label: "Ипотека",
        children: <Mortgage />,
    },
    {
        key: "installment",
        label: "Рассрочка",
        children: <Installment />,
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
