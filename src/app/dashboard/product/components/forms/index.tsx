"use client"

import { Button }   from "@/components/button"
import style        from "./style.module.css"
import { Input }    from "@/components/input/input"
import { CiImport } from "react-icons/ci"
import Image        from "next/image"
import { api }      from "@/services/api"
import { ChangeEvent, useState } from "react"
import { getCookieClient } from "@/lib/cookiesClient"
import notify   from "@/components/notify"

interface CategoriesProps {
    id: string;
    name: string;
} 

interface PropsRequest {
    categories: CategoriesProps[]
}

export function Form({categories}: PropsRequest) {
    const [image, setImage] = useState<File>()
    const [previewImage, setPreview] = useState("");

    async function handleSubmit(data: FormData) {
        const category = data.get("category");
        const name = data.get("name")
        const price = data.get("price")
        const description = data.get("description")

        if (!category || !name || !price || !description || !image) {
            notify("Preencha todos os campos!", "warning")
            return
        }

        const formData = new FormData();

        formData.append("name", name);
        formData.append("file", image);
        formData.append("category_id", category);
        formData.append("price", price);
        formData.append("description", description);

        const token = getCookieClient();

        await api.post("/product", formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(() => {
            notify("Problema ao cadastrar produto, revise as informações", 'error')();
            return
        })

        notify("Produto cadastrado com sucesso", 'success')();

    }

    function handleFile(e: ChangeEvent<HTMLInputElement>){
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0]

            if (image.type !== "image/jpeg" && image.type !== "image/png" && image.type !== "application/pdf") {
               return   
            }

            setImage(image)
            setPreview(URL.createObjectURL(image))
        }
    }

    return (
        <form action={handleSubmit} className={`${style.container}`}>
            <div className={`${style.conter}`}>
                <div>
                    <h1>Novo Produto</h1>
                </div>
                <div className={`${style.inputs}`}>
                    <label>
                        <span>
                            <CiImport/>
                        </span>
                        <input 
                        type="file" 
                        name="file" 
                        accept="image/jpeg, image/png, application/pdf" 
                        onChange={handleFile}/>

                        {previewImage && (
                            <Image
                                alt="Preview"
                                src={previewImage}
                                className={style.preview}
                                fill={true}
                                quality={100}
                                priority={true}
                            />
                        )}

                    </label>
                    <select name="category">
                       {categories.map((category, index) => (
                            <option key={index} value={category.id}>{category.name}</option>
                       ))}
                    </select>
                    <Input type="text" placeholder="Nome do produto" bg="black" border="white" name="name" />
                    <Input type="text" placeholder="Valor" bg="black" border="white" name="price"/>
                    <textarea name="description" placeholder="Descrição"></textarea>
                   <Button name="Cadastrar" bg="bgGreen" hover="Green"/>
                </div>
            </div>
       </form>
    )
}