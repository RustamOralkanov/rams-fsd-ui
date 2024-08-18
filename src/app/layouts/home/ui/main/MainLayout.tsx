import { Outlet } from "react-router-dom";
import { Footer } from "../../../../../widgets/footer";
import { DesktopHeader } from "../../../../../widgets/header/ui/desktop";
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
