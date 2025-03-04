import { ParagraphTexts } from "@/interfaces/ParagraphAboutInterface"

export const ParagraphAbout = ({ texts }: ParagraphTexts) => {
    return (
        <>
            {texts.map((item, index) => (
                <p key={index} className="roboto font-light text-[16px] md:text-[18px] lg:text-[19px] text-[var(--text-paragraph)]">
                    {item.text}
                </p>

            ))}
        </>
    )
}