import { useEffect, useState } from "react"
import { IModalProps} from "../../types"
import styles from "./styles.module.css"

export const Modal = ({nomeDoModal, children, toggle}:IModalProps) => {
    
    useEffect(()=>{
        const dialog = document.querySelector('dialog') as HTMLDialogElement
        toggle ? dialog.showModal() : dialog.close()
    }, [toggle])
 
    return (
        <dialog>
            <form className={styles.modal__form}>
                <header className={styles.modal__form__header}>
                    <p>{nomeDoModal}</p>
                </header>
                <main className={styles.modal__content}>
                    {children}
                </main>
            </form>
        </dialog>        
    )
}
