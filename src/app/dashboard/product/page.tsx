import { Form } from "./components/forms"
import { api }  from "@/services/api"
import { getCookieServer } from "@/lib/cookiesServer"

export default async function Product() {
    const token = await getCookieServer()

    const response = await api.get("/categoryInfo", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return (
        <Form categories={response.data}/>
    )
}