'use client'

import Image from "next/image"
import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { MenuIconCloseModal } from "./MenuIconCloseModal"
import { InputModalContact } from "./InputModalContact"
import { TextAreaModalContact } from "./TextAreaModalContact"
import { formatTelephone } from "@/lib/formatTelephone"

export const WhatsAppButton = () => {
    const [show, setShow] = useState(false)
    const [phone, setPhone] = useState("")
    const [animateModal, setAnimateModal] = useState(false)

    useEffect(() => {
        if (show) {
            setTimeout(() => setAnimateModal(true), 50)
        } else {
            setAnimateModal(false)
        }
    }, [show])

    const toggle = () => {
        if (show) {
            setAnimateModal(false)
            setTimeout(() => setShow(false), 300)
        } else {
            setShow(true)
        }
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name")
        const message = formData.get("message")

        const whatsappMessage = `https://wa.me/553555555555?text=Nome: ${name}%0AMensagem: ${message}`;
        window.open(whatsappMessage, "_blank")
    }

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formatted = formatTelephone(e.target.value);
        setPhone(formatted)
    }

    return (
        <div className="fixed bottom-8 right-8 z-50 flex items-center">
            <div className={`bg-[var(--text-title)] shadow-lg p-3 text-sm rounded-lg max-w-[170px] mr-3 transition-all duration-300 ${show ? 'opacity-0 translate-x-5' : 'opacity-100 translate-x-0'}`}>
                <p className="font-bold text-green-700">Precisa de ajuda?</p>
                <span className="text-gray-600">Fale conosco pelo WhatsApp e tire suas dúvidas!</span>
            </div>
            <button 
                className={`cursor-pointer transition-transform duration-300 ease-in-out ${show ? 'scale-90' : 'hover:scale-105'}`} 
                onClick={toggle}
            >
                <Image
                    src="/icons/zap.png"
                    alt="Icone do Whatsapp"
                    width={85}
                    height={85}
                    className={`transition-transform duration-300 lg:w-[85px] lg:h-[85px] w-18 ${show ? 'rotate-12' : ''}`}
                />
            </button>
            {show && (
                <div className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ease-in-out"
                    style={{ opacity: animateModal ? 1 : 0 }}
                    onClick={toggle}
                >
                    <div 
                        className={`bg-[var(--text-title)] absolute right-8 lg:bottom-8 bottom-0 lg:w-[380px] w-[320px] h-[360px] rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-2xl transition-all duration-300 ease-out`}
                        style={{
                            transform: animateModal ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                            opacity: animateModal ? 1 : 0
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="px-4 py-4 h-full overflow-auto">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/icons/icons_zap.png"
                                    alt="Icone do Whatsapp"
                                    width={40}
                                    height={40}
                                    className={`transition-all duration-500 ${animateModal ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`}
                                />
                                <h2 className="text-md text-[var(--text-subtitle)]">Converse com um especialista</h2>
                            </div>

                            <form onSubmit={submit} className="pt-3 flex flex-col gap-4">
                                <InputModalContact
                                    id="name"
                                    name="name"
                                    text="Nome Completo"
                                    type="text"
                                />
                                <InputModalContact
                                    id="phone"
                                    name="phone"
                                    text="99 99999-9999"
                                    type="tel"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                                <TextAreaModalContact
                                    id="message"
                                    name="message"
                                    text="Descreva seu caso."
                                />
                                <button className="bg-[#128C7E] text-[var(--text-title)] p-2 text-center rounded-sm cursor-pointer hover:bg-[#0e6b5e] transition-colors duration-300">
                                    Iniciar conversa
                                </button>
                            </form>
                            <span 
                                className="absolute -top-12 -right-2 cursor-pointer p-2 rounded-full " 
                                onClick={toggle}>
                                <MenuIconCloseModal src="/icons/close.svg" alt="Icone do Menu Hamburguer" />
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
