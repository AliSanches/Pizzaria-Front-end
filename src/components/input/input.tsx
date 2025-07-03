import style from "./style.module.css"

interface Props {
    type: "text" | "file";
    placeholder?: string;
    outline?: "none";
    bg?: "black";
    border?: "none" | "white";
    name?: string;
}


export function Input({ type, placeholder, outline, bg, border, name }: Props){
    return (
        <input type={type} placeholder={placeholder} name={name}
        className={[
        style.input,
            bg && style[bg],
            outline && style[outline],
            border && style[border],
        ]
            .filter(Boolean) 
            .join(' ')
        } />
    )
}