import { Button } from "@/components/button"
import style      from "./style.module.css"
import { api }    from "@/services/api"
import { getCookieServer } from "@/lib/cookiesServer"
import { redirect } from "next/navigation"

export default function Category() {

    const Register = async (data: FormData) => {
        "use server"
        
        const name = data.get("name");

        if (name === "") {
            return
        }

        const dataCategory = {
            name
        }

        const token = await getCookieServer();

        await api.post("/category", dataCategory, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        redirect('/')
    }

    return (
        <div className={`${style.container}`}>
            <div className={`${style.conter}`}>
                <h1>Nova categoria</h1>
                <form action={Register}>
                    <input type="text" name="name"/>
                    <Button name="Cadastrar" bg="bgGreen" hover="Green"/>
                </form>
            </div>
        </div>
    )
}