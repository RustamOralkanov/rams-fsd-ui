import { AutoTradeIn, Installment, Mortgage, TradeIn } from "../../../entities/payments";

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
        children: <TradeIn />,
    },
    {
        key: "auto-trade-in",
        label: "Auto Trade-in",
        children: <AutoTradeIn />,
    },
];
