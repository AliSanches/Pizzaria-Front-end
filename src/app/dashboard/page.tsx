import { getCookieServer } from "@/lib/cookiesServer"
import Orders  from "./pages/orders"
import { api } from "@/services/api"
import { OrdersData } from "@/lib/types"

async function GetOrders(): Promise<OrdersData[] | []> {
    try {
        const token = await getCookieServer();

        const response = await api.get("/orders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    
        return response.data || [] 
    } catch (error) {
        return []
    }
}

export default async function Dashboard() {
    const response = await GetOrders();

    return (
        <Orders orders={response}/>
    )
}