import { CardList } from "@/components/card"
import style from "./style.module.css"
import { PropsRequest } from "@/lib/types"

export default function Orders({orders}: PropsRequest) {
    return (
       <div className={`${style.container}`}>
            <div className={`${style.conter}`}>
                <h1>Pedidos</h1>

                <CardList array={orders} text="Mesa"  />
            </div>
       </div>
    )
}