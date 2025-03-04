"use client"

import Image from "next/image"
import Link from "next/link"
import { SocialIcons } from "./SocialIcons "
import { LiHeader } from "./LiHeader"
import { useEffect, useState } from "react"
import { MenuIcon } from "./MenuIcon"

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mim", href: "#sobre" },
  { name: "Área de Atuação", href: "/" },
  { name: "Contato", href: "/" },
]

const navIcons = [
  { linkUrl: "Facebook", src: "/icons/icone_facebook.svg", alt: "Icone do Facebook" },
  { linkUrl: "Instagram", src: "/icons/icone_instagram.svg", alt: "Icone do Instagram" },
  { linkUrl: "Twitter", src: "/icons/icone_twitter.svg", alt: "Icone do Twitter" },
  { linkUrl: "Threads", src: "/icons/icone_threads.svg", alt: "Icone do Threads" },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobile, setIsMobile] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMobile = () => {
    if (mobile) {
      // Iniciando animação de fechamento
      setIsClosing(true);
      // Mudamos o estado do mobile imediatamente para atualizar o ícone
      setIsMobile(false);
      // Esperando a animação terminar antes de resetar o estado de fechamento
      setTimeout(() => {
        setIsClosing(false);
      }, 300); // 300ms = duração da animação
    } else {
      setIsMobile(true);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 222) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className={`bg-[var(--background-secondary)] w-full h-full ${isScrolled ? 'pt-[80px]' : ''}`}>
      <header className="max-w-[1300px] justify-center m-auto items-center pt-[20px]">
        <div className={` w-full justify-between pb-[10px] border-b border-b-[#1F3047] lg:flex hidden md:flex md:px-8 lg:px-0  ${isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}`}>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/email.svg"
              alt="Icone Email"
              width={20}
              height={20}
            />
            <Link href="/" className="roboto text-[14px] text-[var(--text-title)]">contato.signer@falecomigo.com</Link>
          </div>
          <div className="flex gap-[20px]">
            <SocialIcons items={navIcons} />
          </div>
        </div>

        <div className={`bg-[var(--background-secondary)] left-0 w-full z-50
          ${isScrolled
            ? "fixed top-0 -mt-1 shadow-lg header-slide-down  "
            : "relative"}`}>
          <div className={`flex justify-between items-center m-auto max-w-[1300px] transition-all duration-500 px-5 lg:px-0 ${isScrolled ? "h-[91px]" : "lg:py-4 pt-3 pb-6"}`}>
            <div className="shrink-0">
              <Link href="/">
                <Image
                  src="/icons/Logo.png"
                  alt="Logo do site"
                  width={160}
                  height={160}
                />
              </Link>
            </div>
            <div className="absolute z-60 right-6 lg:hidden " onClick={toggleMobile}>
              {mobile ? (
                <MenuIcon src="/icons/close.svg" alt="Icone do Menu Hamburguer" />
              ) : (
                <MenuIcon src="/icons/menu.svg" alt="Icone do Menu Hamburguer" />
              )}
            </div>
            <nav>
              <ul className={`lg:gap-[26px] gap-6 lg:items-center lg:flex lg:h-auto
                ${mobile ?
                  "animeLeftMobile bg-[var(--background-secondary)] w-full items-center flex flex-col py-12 top-20 absolute left-0" :
                  isClosing ?
                    "animeRightMobile bg-[var(--background-secondary)] w-full items-center flex flex-col py-12 top-20 absolute left-0" :
                    "h-0 overflow-hidden"}`}>
                <LiHeader items={navLinks} />
                <Link href="/" className="roboto uppercase text-[16px] text-center items-center justify-center flex bg-[var(--background-accent)] text-[var(--text-title)] px-7 py-3 rounded-sm">Agendar Consulta</Link>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </section>
  )
}