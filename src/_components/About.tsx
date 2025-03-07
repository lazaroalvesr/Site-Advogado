"use client"

import Image from "next/image"
import Link from "next/link"
import { ParagraphAbout } from "./ParagraphAbout"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const TextAbout = [
  { text: "Adriano D. Signer é um advogado altamente experiente, atuando nas áreas de Direito Trabalhista, Empresarial e Civil. Com uma abordagem focada em soluções jurídicas personalizadas, ele oferece aos seus clientes uma defesa sólida e estratégica." },
  { text: "Com um compromisso firme com a justiça e a ética, Adriano se destaca pela sua capacidade de resolver conflitos de forma eficiente, atendendo tanto a questões corporativas quanto pessoais. Sua experiência é marcada por casos bem-sucedidos, sempre com a busca por soluções rápidas e eficazes." },
  { text: "Seu escritório proporciona uma assessoria completa, desde a consultoria preventiva até a defesa em processos judiciais, com total transparência e respeito ao cliente. Adriano D. Signer é guiado pela excelência, priorizando um atendimento humanizado, construindo confiança e sempre atuando no melhor interesse de seus clientes." }
]

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="sobre"
      ref={ref}
      className="lg:mt-[120px] mt-[70px] max-w-[1300px] pb-12 m-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex lg:flex-row flex-col md:flex-row">
          <div className="relative lg:w-[534px] flex items-center justify-center m-auto">
            <div className="lg:w-[306px] lg:h-[589px] h-[480px] w-[300px] md:w-[270px] md:h-[490px] md:-ml-12 lg:-ml-60 -ml-20 bg-[var(--background-secondary)] rounded-[10px]"></div>
            <motion.div
              className="absolute lg:top-[13px] top-4 lg:left-[32px] md:-left-7 lg:w-[370px] w-[300px] md:w-[300px] md:h-[436px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/img/Advogado_about.png"
                alt="Foto do Advogado mexendo em um computador no seu escritório."
                width={444}
                height={665}
              />
            </motion.div>
          </div>
          <div className="lg:w-[707px] md:w-[500px] w-full px-8 md:px-4 lg:px-0 flex flex-col lg:pt-0 md:pt-0 pt-[52px]">
            <motion.h3
              className="border-b-3 text-[24px] lg:text-[20px] md:text-[18px] w-fit marcellus uppercase text-[var(--text-main)]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Sobre MIM
            </motion.h3>
            <ParagraphAbout texts={TextAbout} />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/"
                className="roboto cursor-pointer lg:w-54 mt-8 w-44 h-12 md:w-48 md:h-12 items-center justify-center 
                hover:scale-105 flex transition-all duration-300 ease-in-out 
                bg-[var(--background-secondary)] hover:bg-[var(--background-accent)] 
                lg:text-[18px] text-[14px] uppercase md:text-[16px] text-[var(--text-title)] 
                rounded-sm"
              >
                Agendar Consulta
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
