import { Header } from "./pages/header/index";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}