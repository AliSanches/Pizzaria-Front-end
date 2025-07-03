import style from "./style.module.css"

export default function Orders() {
    return (
       <div className={`${style.container}`}>
            <div className={`${style.conter}`}>
                <h1>Pedidos</h1>
                <section className={`${style.secMesas}`}>
                    <button>
                        Mesa 10
                    </button>
                </section>
            </div>
       </div>
    )
}