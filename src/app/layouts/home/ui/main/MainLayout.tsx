import { Outlet } from "react-router-dom";
import { DesktopHeader } from "../../../../../widgets/header/ui/desktop";
import { Footer } from "../../../../../widgets/footer";

export const MainLayout = () => {
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
