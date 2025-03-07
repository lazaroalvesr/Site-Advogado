import type React from "react"
import Image from "next/image"

interface CardClientProps {
    items: {
        src: string
        name: string
        subtitle: string
        text: string
    }[]
}

export const CardClientReview: React.FC<CardClientProps> = ({ items }) => {
    return (
        <>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="w-[320px] flex-shrink-0 h-[280px] roboto border border-[var(--background-accent)] rounded-sm"
                >
                    <div className="p-5">
                        <div className="flex gap-3">
                            <div className="w-[40px] h-[40px]">
                                <Image
                                    src={item.src || "/placeholder.svg"}
                                    alt="Foto do cliente"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-[var(--text-subtitle)]">{item.name}</h3>
                                <span className="text-md text-[var(--text-subtitle)]">{item.subtitle}</span>
                            </div>
                        </div>
                        <div className="mt-3 h-[154px] flex">
                            <p className="text-[var(--text-subtitle)] text-md h-[120px] line-clamp-5">{item.text}</p>
                        </div>
                        <div className="flex justify-end">
                            <Image src="/icons/star_rating.svg" alt="Icone de estrela avaliação do cliente" width={132} height={24} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

