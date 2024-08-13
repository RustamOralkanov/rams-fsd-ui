import { App } from "antd";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import router from "./router";

export const MyApp = () => {
    return (
        <App>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </App>
    );
};
