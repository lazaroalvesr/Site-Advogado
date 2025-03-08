import Image from "next/image"
import Link from "next/link"
import { ServiceItemFooter } from "./ServiceItemFooter"
import { ContactItemFooter } from "./ContactItemFooter"
import { SocialLinksFooter } from "./SocialLinksFooter"
import { LegalInfoFooter } from "./LegalInfoFooter"

const NavTextService = [
    { name: "Direito Trabalhista" },
    { name: "Direito Empresarial" },
    { name: "Direito Civil" },
    { name: "Direito da Família " },
    { name: "Direito Imobiliário" },
    { name: "Direito Tributário" },
]

const NavTextContact = [
    {
        src: "/icons/earth.png", href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            "Rua da Justiça, 123, Centro, São Paulo - SP, 01000-000")}`, alt: "Icone do planeta terra", text: "Rua da Justiça, 123, Centro, São Paulo - SP, 01000-000"
    },
    { src: "/icons/telephone_color.png", href: "https://wa.me/5511999999999", alt: "Icone de um telefone", text: "(11) 98765-4321" },
    { src: "/icons/email_color.png", href: "mailto:contato.signer@falecomigo.com", alt: "Icone de um envelope/email", text: "contato.signer@falecomigo.com" },
]

const NavImgSocialFooter = [
    { src: "/icons/icone_facebook.svg", href: "https://www.facebook.com", alt: "Icone do Facebook" },
    { src: "/icons/icone_instagram.svg", href: "https://www.instagram.com", alt: "Icone do Instagram" },
    { src: "/icons/icone_twitter.svg", href: "https://twitter.com", alt: "Icone do Twitter" },
    { src: "/icons/icone_threads.svg", href: "https://www.threads.net", alt: "Icone do Threads" }
]

const LegalTextInfoFooter = [
    { owner: "CNPJ 22.222.222/0000-00 | OAB/SP 99009/15 -  Adriano D.Signer.", srcAuthor: "https://www.lazaroalvesr.com/", author: "criado por Lázaro Alves R " }
]

export const Footer = () => {
    return (
        <footer className="bg-[var(--background-secondary)] w-full lg:mt-[120px] mt-[70px] md:mt-[90px]">
            <div className="max-w-[1300px] px-10 pt-[70px] m-auto flex lg:flex-row flex-col md:flex-row md:max-w-[748px] md:flex-wrap gap-[55px] lg:pt-[84px] border-b border-[var(--text-paragraph)] pb-[85px]">
                <div className="flex flex-col lg:w-[310px] md:w-[401px]">
                    <Link href="/">
                        <Image
                            src="/icons/Logo.png"
                            alt="Logo do site"
                            width={190}
                            height={190}
                        />
                    </Link>
                    <p className="roboto text-[16px] text-[var(--text-neutral)] pt-[30px]">Com compromisso, ética e excelência, nossa advocacia oferece soluções jurídicas personalizadas para proteger
                        seus direitos e interesses. Atuamos com dedicação para garantir um atendimento transparente e eficaz,
                        sempre focados nas melhores estratégias para cada caso.
                    </p>
                </div>
                <ServiceItemFooter
                    title="Serviços"
                    text={NavTextService}
                />
                <ContactItemFooter
                    title="Contato"
                    items={NavTextContact}
                />
                <SocialLinksFooter
                    title="Redes Sociais"
                    items={NavImgSocialFooter}
                />
            </div>
            <div className="lg:w-[1300px] px-4 lg:px-0 md:px-12 flex m-auto py-5 items-center justify-center">
                <LegalInfoFooter
                    items={LegalTextInfoFooter}
                />
            </div>
        </footer>
    )
}