import React from "react";
import ReactDOM from "react-dom/client";
import { MyApp } from "./app/MyApp";
import { ConfigProvider } from "antd";
import config from "./app/config/ant.json";
import locale from "antd/locale/ru_RU";
import "./app/assets/styles/ant/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ConfigProvider theme={config} wave={{ disabled: true }} locale={locale}>
            <MyApp />
        </ConfigProvider>
    </React.StrictMode>
);
