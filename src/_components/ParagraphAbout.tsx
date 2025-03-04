import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ParagraphAboutProps {
    texts: { text: string }[]
}

export const ParagraphAbout = ({ texts }: ParagraphAboutProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });


    return (
        <div className="flex flex-col gap-[15px] pt-[30px]">
            {texts.map((item, index) => {

                return (
                    <motion.div
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    >
                        <p className="roboto font-light text-[14px] md:text-[16px] lg:text-[19px] text-[var(--text-paragraph)]">{item.text}</p>
                    </motion.div>
                )
            })}
        </div>
    )
}
