import Image from "next/image"
import Link from "next/link"
import { ParagraphAbout } from "./ParagraphAbout"

const TextAbout = [
    { text: "Adriano D. Signer é um advogado altamente experiente, atuando nas áreas de Direito Trabalhista, Empresarial e Civil. Com uma abordagem focada em soluções jurídicas personalizadas, ele oferece aos seus clientes uma defesa sólida e estratégica." },
    { text: "Com um compromisso firme com a justiça e a ética, Adriano se destaca pela sua capacidade de resolver conflitos de forma eficiente, atendendo tanto a questões corporativas quanto pessoais. Sua experiência é marcada por casos bem-sucedidos, sempre com a busca por soluções rápidas e eficazes." },
    { text: "Seu escritório proporciona uma assessoria completa, desde a consultoria preventiva até a defesa em processos judiciais, com total transparência e respeito ao cliente. Adriano D. Signer é guiado pela excelência, priorizando um atendimento humanizado, construindo confiança e sempre atuando no melhor interesse de seus clientes." }
]

export const About = () => {
    return (
        <section className="lg:mt-[120px] mt-[70px] max-w-[1300px] pb-12 m-auto" id="sobre">
            <div className="flex lg:flex-row flex-col mx-12 md:flex-row items-center justify-center">
                <div className="relative lg:w-[534px] flex items-center justify-center m-auto">
                    <div className="lg:w-[306px] lg:h-[619px] h-[480px] w-[300px] md:w-[300px] md:h-[550px] -ml-20 bg-[var(--background-secondary)] rounded-[10px]"></div>
                    <div
                        className="absolute lg:top-[10px] top-4 lg:left-[32px] lg:w-[400px] w-[300px] md:w-[250px] md:h-[436px]">
                        <Image
                            src="/img/Advogado_about.png"
                            alt="Foto do Advogado mexendo em um computador no seu escritorio"
                            width={444}
                            height={665}
                        />
                    </div>
                </div>
                <div className="lg:w-[707px] md:w-[580px] flex flex-col lg:pt-0 md:pt-0 pt-[52px]">
                    <h3
                        className="border-b-3 text-[24px] lg:text-[20px] md:text-[16px] w-fit marcellus uppercase text-[var(--text-main)]">
                        Sobre MIM
                    </h3>
                    <div className="flex flex-col gap-[15px] pt-[30px]">
                        <ParagraphAbout texts={TextAbout} />
                    </div>
                    <Link href="/" className="roboto cursor-pointer lg:w-44 mt-8 w-60 h-18 lg:h-12 items-center justify-center hover:scale-105 flex transition-colors duration-300 ease-in-out-all bg-[var(--background-secondary)] hover:bg-[var(--background-accent)] lg:text-[20px] text-[20px] uppercase md:text-[18px] .3s ease-in text-[var(--text-title)] rounded-sm">
                        Agendar Consulta
                    </Link>
                </div>
            </div>
        </section>
    )
}