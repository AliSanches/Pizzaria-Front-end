import styles       from "./page.module.css";
import Link         from "next/link";
import { api }      from "@/services/api";
import { redirect } from "next/navigation";
import { cookies }  from "next/headers";

export default function Home() {
  // RODA FUNÇÃO DO LADO DO SERVIDOR
  const handleSubmit = async (data: FormData) => { 
    "use server"

    const email = data.get("email");
    const password = data.get("password");

    if (email === "" || password === "") {
      return
    }

    try {
      const response = await api.post("/session", {
        email: email,
        password: password
      });

      if (!response.data.token) {
        return
      }

      const cookiesAwait = await cookies();
      const maxAge =  60 * 60 * 24 * 7
      cookiesAwait.set("user", response.data.token, {
        maxAge: maxAge,  // TEMPO VALIDO
        path: "/",       // ESTARA DISPONIVEL EM TODO SITE
        httpOnly: false, // ACESSA DO CLIENT-SIDE
        secure: process.env.NODE_ENV === "production"
      })

    } catch (error) {
      return
    }

    redirect('/dashboard'); // REDIRECT IF IT WORKS
  }

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.conter}`}>
          <div className={`${styles.logo}`}>
            <h1>Pizzaria</h1>
            <h2>SÃO JOÃO</h2>
          </div>
          <form action={handleSubmit}>
            <div className={`${styles.inputs}`}>
              <label htmlFor="">E-mail</label>
              <input type="text" placeholder="exemplo@gmail.com" name="email" />
            </div>

            <div className={`${styles.inputs}`}>
              <label htmlFor="">Senha:</label>
              <input type="password" placeholder="**********" name="password" />
            </div>

            <button type="submit">
              Acessar
            </button>
          </form>
          <p>Não possui conta? <Link href="/singup">Cadastrar-se</Link></p>
        </div>
      </div>
    </>
  );
}
