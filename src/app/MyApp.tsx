import { App } from "antd";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { store } from "./store";

export const MyApp = () => {
    return (
        <App>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </App>
    );
};
