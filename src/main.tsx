import { ConfigProvider } from "antd";
import locale from "antd/locale/ru_RU";
import React from "react";
import ReactDOM from "react-dom/client";
import { antdTheme as config } from "./app/config/index";
import { MyApp } from "./app/MyApp";
import "@/app/assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ConfigProvider theme={config} wave={{ disabled: true }} locale={locale}>
            <MyApp />
        </ConfigProvider>
    </React.StrictMode>
);
