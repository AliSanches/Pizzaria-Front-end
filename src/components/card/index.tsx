import style from "./style.module.css"

interface Properties {
    id?: string;
    name?: string;
    table?: number;
}

interface Props {
    array: Properties[];
    text: string;
}

export function CardList({ array, text }: Props) {
    return (
        <section className={`${style.container}`}>
            {array.map((prod) =>  (
                <button key={prod.id}>
                    <span key={prod.id}>{text}: {prod.name ? prod.name : prod.table}</span>
                </button>
            ))}
        </section>
    )
}