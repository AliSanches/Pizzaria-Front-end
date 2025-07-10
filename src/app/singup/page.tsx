"use client"

import Link       from "next/link";
import styles     from "../page.module.css";
import { api }    from "@/services/api";
import notify     from "@/components/notify";
import { redirect } from "next/navigation";

export default function Singup() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        
        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");

        if (name === "" || email === "" || password === "") {
            alert("Preencha todos os campos corretamente")
            return
        }

        try {
            await api.post("/users", {
                name,
                email,
                password
            });
            notify("Usuário cadastrado", "success")();
        } catch (error) {
            console.log(error);
            notify("Falha ao criar usuário", "error")();
        }

        setTimeout(() => {
            redirect('/');
          }, 1000);
    }

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.conter}`}>
            <div className={`${styles.logo}`}>
                <h1>Pizzaria</h1>
                <h2>SÃO JOÃO</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={`${styles.inputs}`}>
                    <label htmlFor="">Nome:</label>
                    <input type="text" placeholder="Seu nome" required name="name"/>
                </div>

                <div className={`${styles.inputs}`}>
                    <label htmlFor="">E-mail</label>
                    <input type="text" placeholder="exemplo@gmail.com" required name="email"/>
                </div>

                <div className={`${styles.inputs}`}>
                    <label htmlFor="">Senha:</label>
                    <input type="password" placeholder="**********" required name="password"/>
                </div>

                <button type="submit">
                    Cadastrar-se
                </button>
            </form>
            <p>Já possui conta? <Link href="/">Fazer login</Link></p>
            </div>
      </div>
    )
}