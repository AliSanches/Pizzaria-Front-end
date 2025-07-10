import { api }  from "@/services/api"
import { getCookieServer } from "@/lib/cookiesServer"
import { Card } from "./Components"

export default async function Product() {
    const token = await getCookieServer()

    const response = await api.get("/productInfo", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return (
        <Card product={response.data} />
    )
}