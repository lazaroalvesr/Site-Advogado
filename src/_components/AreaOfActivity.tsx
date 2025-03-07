"use client"

import { CardAreaOfActivity } from "./CardAreaOfActivity"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const CardAreaOfActivityText = [
    { src: "/icons/icone_balancaJustica.png", tittle: "Direito Trabalhista", paragraph: "Defesa dos direitos dos trabalhadores e empregadores, consultoria em questões relacionadas a contratos de trabalho, negociações de acordos, rescisões contratuais, horas extras, acidentes de trabalho, e defesa em ações trabalhistas." },
    { src: "/icons/icone_predio.png", tittle: "Direito Empresarial", paragraph: "Assessoria jurídica para empresas de diversos segmentos, abrangendo a criação de contratos, planejamento tributário, compliance, defesa em litígios comerciais, falências e recuperação judicial, e questões regulatórias." },
    { src: "/icons/icone_documento.png", tittle: "Direito Civil", paragraph: "Oferecemos soluções jurídicas para disputas contratuais,  , indenizações, questões patrimoniais e ações de cobrança. Também atuamos em direito de família, incluindo divórcios, guarda de filhos e pensão alimentícia." },
    { src: "/icons/icone_dinheiro.png", tittle: "Direito Tributário", paragraph: "Consultoria em questões fiscais, planejamento tributário e defesa em litígios tributários. Atua em ações de revisão de tributos, recuperação de impostos pagos indevidamente e orientação sobre a correta aplicação da ." },
    { src: "/icons/icone_familia.png", tittle: "Direito da Família ", paragraph: "Consultoria e defesa em casos de divórcio, união estável, guarda de filhos, inventários, partilhas de bens, e planejamento sucessório. Busca soluções amigáveis e eficientes para evitar longos processos judiciais." },
    { src: "/icons/icone_casa.png", tittle: "Direito Imobiliário", paragraph: "Consultoria e representação em questões relacionadas à compra, venda e locação de imóveis, resolução de disputas entre locadores e locatários, e assessoramento em processos de usucapião, contratos imobiliários." }
]

export const AreaOfActivity = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <section
            ref={ref}
            className="bg-[var(--background-secondary)] w-full lg:mt-[120px] mt-[70px] md:mt-[90px]">
            <div className="max-w-[1300px] flex flex-col m-auto justify-center items-center py-[64px]">
                <h3 className="border-b-3 text-[24px] mb-[50px] lg:text-[20px] md:text-[18px] w-fit marcellus uppercase text-[var(--text-main)]">
                    Area de atuação
                </h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-4 lg:gap-y-3 md:gap-6 gap-4">
                    {CardAreaOfActivityText.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}>
                            <CardAreaOfActivity itens={[item]} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}