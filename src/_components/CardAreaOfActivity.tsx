import { CardItens } from "@/interfaces/CardAreaOfActivityInterface";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


export const CardAreaOfActivity = ({ itens }: CardItens) => {

    return (
        <>
            {itens.map((item, index) => (
                <div
                    key={index}
                    className="bg-[var(--background-neutral)] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out lg:max-w-[24rem] max-w-[20rem] rounded-sm text-[var(--text-subtitle)] roboto">
                    <div className="lg:p-7 p-5">
                        <Image
                            src={item.src}
                            alt="Ícone do card"
                            width={50}
                            height={50}
                        />
                        <div className="pt-6 lg:h-72 h-52">
                            <p className="font-medium text-xl ">{item.tittle}</p>
                            <p className="font-light lg:text-lg text-sm pt-3 text-[var(--text-paragraph)]">
                                {item.paragraph}
                            </p>
                        </div>
                        <div className="flex items-center cursor-pointer gap-2 pt-4">
                            <span>Saiba Mais</span>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
