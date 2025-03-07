"use client"
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { CardClientReview } from './CardClientReview'
import { ReviewSilderControls } from './ReviewSliderControls '
import { useInView } from "react-intersection-observer"

const ClientReviewText = [
    { src: "/img/client/Client-1.png", name: "Fernanda Almeida", subtitle: "Empresária", text: `"Fui extremamente bem atendida e recebi todo o suporte necessário para resolver uma questão contratual complexa. Profissionalismo e eficiência definem esse escritório. Recomendo a todos!"` },
    { src: "/img/client/Client-2.png", name: "Ricardo Souza", subtitle: "Engenheiro", text: `"Tive um problema jurídico que parecia impossível de resolver, mas a equipe encontrou a melhor estratégia e garantiu um excelente resultado. Atendimento impecável e muito transparente."` },
    { src: "/img/client/Client-3.png", name: "Mariana Castro", subtitle: "Médica", text: `"Desde o primeiro contato, fui tratada com respeito e profissionalismo. O escritório se mostrou ágil e eficiente, esclarecendo todas as minhas dúvidas e garantindo minha tranquilidade durante o processo."` },
    { src: "/img/client/Client-4.png", name: "Lucas Pereira", subtitle: "Advogado", text: `"Excelente atendimento! A equipe do escritório foi extremamente competente em resolver uma questão que eu considerava difícil. Fiquei muito satisfeito com o resultado e com o acompanhamento durante todo o processo."` },
    { src: "/img/client/Client-5.png", name: "Camila Rocha", subtitle: "Arquiteta", text: `"Foi um prazer trabalhar com a equipe. Eles se mostraram sempre dispostos a ajudar e esclarecer todas as minhas dúvidas, e a forma como lidaram com o meu caso foi exemplar. Agradeço pelo suporte."` },
    { src: "/img/client/Client-6.png", name: "Carlos Lima", subtitle: "Empresário", text: `"A equipe foi muito profissional e ágil. Fui tratado com respeito desde o início e a resolução do meu problema foi muito mais rápida do que eu imaginava. Realmente recomendo!"` },
];

export const ClientReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false)
    const maxIndex = ClientReviewText.length - 3
    const sliderRef = useRef<HTMLDivElement>(null)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const nextSlide = useCallback(() => {
        if (isAnimating) return

        setAnimating(true)
        if (currentIndex >= maxIndex) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }, [currentIndex, isAnimating, maxIndex])

    const previewSlide = useCallback(() => {
        if (isAnimating) return

        setAnimating(true)
        if (currentIndex <= 0) {
            setCurrentIndex(maxIndex)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }, [currentIndex, isAnimating, maxIndex])

    useEffect(() => {
        const handleTransitionEnd = () => {
            setAnimating(false)
        }

        const sliderElement = sliderRef.current
        if (sliderElement) {
            sliderElement.addEventListener("transitionend", handleTransitionEnd)
        }

        return () => {
            if (sliderElement) {
                sliderElement.removeEventListener("transitionend", handleTransitionEnd)
            }
        }
    })

    useEffect(() => {
        if (!isPaused) {
            autoPlayRef.current = setInterval(() => {
                nextSlide()
            }, 5000)
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isPaused, nextSlide])

    const handleManualControl = (action: () => void) => {
        setIsPaused(true)
        action()

        setTimeout(() => {
            setIsPaused(false)
        }, 10000)
    }

    const cardWith = 320
    const cardGap = isMobile ? 12 : 40
    const translateX = -(currentIndex * (cardWith + cardGap))

    return (
        <motion.section
            ref={ref}
            className='max-w-[1300px] lg:mt-[120px] mt-[70px] md:mt-[90px] pb-72 flex items-center flex-col justify-center m-auto'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <h3 className='border-b-3 text-[20px] w-80 md:w-fit text-center mb-[50px] lg:text-[20px] md:text-[18px] lg:w-fit marcellus uppercase text-[var(--text-main)]'>
                RECONHECIDO PELO EXCELENTE ATENDIMENTO
            </h3>
            <div className='lg:max-w-[1044px] w-full md:max-w-[684px] max-w-[320px] flex overflow-hidden lg:pl-0 pl-0 md:pl-0'>
                <div
                    ref={sliderRef}
                    className='flex gap-[42px] transition-transform duration-500 ease-in-out'
                    style={{
                        transform: `translateX(${translateX}px)`,
                        gap: `${cardGap}px`
                    }}>
                    {ClientReviewText.map((item, index) => (
                        <CardClientReview key={index} items={[item]} />
                    ))}
                </div>
            </div>
            <div className='mt-8 md:w-[684px] lg:w-fit'>
                <ReviewSilderControls
                    nextSlide={() => handleManualControl(nextSlide)}
                    prevSlide={() => handleManualControl(previewSlide)}
                    disablePrev={isAnimating}
                    disableNext={isAnimating}
                />
            </div>
        </motion.section>
    )
}
