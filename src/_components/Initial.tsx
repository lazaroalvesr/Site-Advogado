"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export const Initial = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    const imageVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15
            }
        }
    }


    return (
        <section className="bg-[var(--background-secondary)] w-full pt-8 md:pt-0 lg:pt-0 -mt-2 lg:-mt-0 md:-mt-0">
            <div className="lg:max-w-[1300px] md:max-w-[780px] m-auto lg:pt-[44px] md:pt-0">
                <section className="flex items-center lg:flex-row flex-col md:flex-row md:gap-8">
                    <motion.div
                        className="flex flex-col md:max-w-[453px] lg:-mt-20 lg:max-w-[803px] gap-[20px] px-7 md:px-0 lg:gap-[39px]"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible">
                        <motion.h3
                            variants={itemVariants}
                            className="border-b-3 text-[16px] w-fit marcellus uppercase text-[var(--text-main)]">Deixe o tribunal conosco</motion.h3>
                        <motion.div
                            variants={itemVariants}
                            className="max-w-[819px] flex flex-col gap-[15px]">
                            <motion.h1
                                variants={itemVariants}
                                className="marcellus lg:text-[55px] md:text-[26px] text-[26px] text-[var(--text-title)] lg:leading-14">
                                Experiência e Excelência Jurídica em Direito Trabalhista, Empresarial e Civil.
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="roboto lg:flex hidden md:flex text-[var(--text-title)] md:text-[13px] lg:text-[15px] max-w-[770px] font-light">
                                Com ética, comprometimento e vasta experiência, oferecemos soluções jurídicas personalizadas para proteger seus direitos, seja em questões trabalhistas individuais ou empresariais.                                </motion.p>
                        </motion.div>
                        <Link href="/" className="roboto cursor-pointer lg:w-44 w-38 h-10 md:w-32 md:h-10 lg:h-12 items-center justify-center hover:scale-105 flex transition-all lg:text-[20px] text-[14px] uppercase md:text-[15px] .3s ease-in bg-[var(--background-accent)] text-[var(--text-title)] rounded-sm">
                            Saiba Mais
                        </Link>
                    </motion.div>
                    <motion.div
                        className="lg:pt-0 pt-12"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible">
                        <Image
                            src="/img/Advogado.png"
                            alt="Foto do Advogado"
                            width={475}
                            height={713}
                            className="lg:w-[475px] lg:h-[713px] w-[209px] h-full md:w-[327px] md:h-[436px]"
                        />
                    </motion.div>
                </section>
            </div>
        </section>
    )
}