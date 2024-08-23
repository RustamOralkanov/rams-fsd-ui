import { Outlet } from "react-router-dom";
import { DesktopHeader } from "@/widgets/header";
import { Footer } from "../../../../../widgets/footer";
import { useTheme } from "../../model/useTheme";

export const MainLayout = () => {
    useTheme();
    return (
        <>
            <DesktopHeader />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
