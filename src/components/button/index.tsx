"use client"

import style from "./style.module.css"
import { useFormStatus } from "react-dom";

interface Props {
    name: string;
    bg?: 'bgGreen' | 'bgRed';
    hover?: 'Green' | 'Red';
}

export function Button({ name, bg, hover }: Props) {
    // Após clicar fica true até a action ser resolvida
    const { pending } = useFormStatus();

    return (
        // .filter(Boolean) Removo qualquer valor false, null ou undefined
        // .join separo minhas classes por espaço
        <button
            className={[
                style.button,
                bg && style[bg],
                hover && style[hover]
            ]
                .filter(Boolean) 
                .join(' ')
        }
        disabled={pending}
        >
            { pending ? "Carregando" : name }
        </button>
    )
}