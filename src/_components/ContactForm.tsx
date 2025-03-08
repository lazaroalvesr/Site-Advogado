/* eslint-disable */
"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { ButtonSendForm } from "./ButtonSendForm"
import { InputForm } from "./InputForm"
import { TextAreaForm } from "./TextAreaForm"
import { FormInterfaceSubmit } from "@/interfaces/FormInterfaceSubmit"
import Image from "next/image"
import emailjs from '@emailjs/browser'
import { useInView } from "react-intersection-observer"
import { motion } from 'framer-motion'

export const ContactForm = () => {
    const initialFormState: FormInterfaceSubmit = {
        id: '',
        name: '',
        email: '',
        assunto: '',
        telefone: '',
        mensagem: '',
        value: ''
    };

    const [formSubmit, setFormSubmit] = useState<FormInterfaceSubmit>({
        id: '',
        name: '',
        email: '',
        assunto: '',
        telefone: '',
        mensagem: '',
        value: ''
    });
    const [sucessMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormSubmit((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function sendEmail(e: FormEvent) {
        e.preventDefault();

        if (!formSubmit.name || !formSubmit.assunto || !formSubmit.email || !formSubmit.telefone || !formSubmit.mensagem) {
            setErrorMessage('Por favor, preencha todos os campos obrigatórios antes de enviar sua mensagem.')
            setSuccessMessage('')
            return
        }

        setSuccessMessage('Mensagem enviada com sucesso! Em breve, nossa equipe entrará em contato com você.')
        setErrorMessage('');

        const templateParams = {
            from_name: formSubmit.name,
            email: formSubmit.email,
            celular: formSubmit.telefone,
            assunto: formSubmit.assunto,
            message: `Assunto: ${formSubmit.assunto}\n\nMensagem:\n${formSubmit.mensagem}`
        };

        emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, templateParams, process.env.NEXT_PUBLIC_USER_ID as string)
            .then((response) => {
                setFormSubmit(initialFormState);
                setTimeout(() => {
                    setSuccessMessage('')
                }, 500)
            }, (err) => {
                setErrorMessage("Erro ao enviar mensagem")
            })

    }

    return (
        <section
            ref={ref}
            className="lg:max-w-[1432px] flex m-auto justify-center gap-4 items-center lg:h-[877px] lg:mt-[120px] mt-[70px] md:mt-[90px]">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:w-[699px] md:w-[699px] w-full bg-[var(--background-secondary)] h-full rounded-sm">
                <div className="lg:py-24 md:px-4 py-16 px-4  md:max-w-[578px] m-auto">
                    <h3 className="border-b-3 text-[24px] lg:text-[20px] md:text-[18px] w-fit marcellus uppercase text-[var(--text-main)]">
                        Entre em contato
                    </h3>
                    <h1 className="marcellus text-[var(--text-title)] lg:w-96 text-4xl pt-10">Agende Sua Consulta Gratuita</h1>
                    <form onSubmit={sendEmail} className="pt-10 grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-[27px] m-auto ">
                        <InputForm
                            id="nomeCompleto"
                            name="name"
                            text="Nome Completo"
                            type="text"
                            onChange={handleChange}
                            value={formSubmit.name}
                        />
                        <InputForm
                            id="email"
                            name="email"
                            text="Email"
                            type="email"
                            onChange={handleChange}
                            value={formSubmit.email}
                        />
                        <InputForm
                            id="telefone"
                            name="telefone"
                            text="Telefone"
                            type="tel"
                            onChange={handleChange}
                            value={formSubmit.telefone}
                        />
                        <InputForm
                            id="assunto"
                            name="assunto"
                            text="Assunto"
                            type="text"
                            onChange={handleChange}
                            value={formSubmit.assunto}
                        />
                        <div className="lg:col-span-2 md:col-span-2">
                            <TextAreaForm
                                id="mensagem"
                                name="mensagem"
                                text="Mensagem"
                                onChange={handleChange}
                                value={formSubmit.mensagem}
                            />
                            <div className="w-full mt-[16px]">
                                <ButtonSendForm />
                            </div>
                        </div>
                    </form>
                    {sucessMessage && (
                        <p className="bg-green-600 text-white text-center lg:p-2 p-3 mt-4 rounded-sm text-base">{sucessMessage}</p>
                    )}
                    {errorMessage && (
                        <p className="bg-red-600 text-white text-center p-2 mt-4 rounded-sm">{errorMessage}</p>
                    )}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[706px] h-full -mt-3 lg:flex hidden">
                <Image
                    src="/img/Mulheres_Trabalhando.png"
                    alt="Foto mulheres trabalhando"
                    width={706}
                    height={877}
                    className="object-fill rounded-sm"
                />
            </motion.div>
        </section >
    )
}