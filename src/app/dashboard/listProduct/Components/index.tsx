import { CardList } from "@/components/card";
import style from "./style.module.css"

interface Product {
    id: string;
    name: string;
}

interface PropsProduct {
    product: Product[]
}

export function Card({product}: PropsProduct) {
    return (
       <div className={style.container}>
            <CardList array={product} text="Produto"/>
       </div>
    )
}