import { toast, type TypeOptions  } from 'react-toastify';

export const notify = (message: string, type: TypeOptions): any => {
    return () => {
        toast(`${message}`, {
            type: type as TypeOptions,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}