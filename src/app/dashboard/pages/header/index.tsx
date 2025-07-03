"use client"

import style from "./style.module.css"
import Link  from "next/link"
import { deleteCookie } from "cookies-next/client"
import { useRouter }    from "next/navigation";

export function Header(){
    const router = useRouter();

    const handleLogout = async () => {
        deleteCookie("user", { path: "/" });

        router.replace("/");
    }

    return (
        <div className={`${style.container}`}>
            <div className={`${style.conter}`}>
                <Link href="/dashboard">
                    <div className={`${style.logo}`}>
                        <h1>Pizzaria</h1>
                        <h2>SÃO JOÃO</h2>
                    </div>
                </Link>
                
                <nav className={`${style.navegation}`}>
                    <Link href="/dashboard/category">
                        Categoria
                    </Link>
                    <Link href="/dashboard/product">
                        Produto
                    </Link>

                    <form action={handleLogout}>
                        <button type="submit">
                            Sair
                        </button>
                    </form>
                </nav>
            </div>
        </div>
    )
}