import { Header } from "./pages/index";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}