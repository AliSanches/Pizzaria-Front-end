"use cliente"

import { Button }   from "@/components/button"
import style        from "./style.module.css"
import { Input }    from "@/components/input/input"
import { CiImport } from "react-icons/ci";


export function Form() {
    return (
       <div className={`${style.container}`}>
            <div className={`${style.conter}`}>
                <div>
                    <h1>Novo Produto</h1>
                </div>
                <div className={`${style.inputs}`}>
                    <label>
                        <span>
                            <CiImport/>
                        </span>
                        <input type="file" name="file" accept="image/jpeg, image/png, application/pdf"/>
                    </label>
                    <select name="categoria">
                        <option>Selecione uma categoria</option>
                    </select>
                    <Input type="text" placeholder="Nome do produto" bg="black" border="white" />
                    <Input type="text" placeholder="Valor" bg="black" border="white" />
                    <textarea name="" placeholder="Descrição"></textarea>
                   <Button name="Cadastrar" bg="bgGreen" hover="Green"/>
                </div>
            </div>
       </div>
    )
}