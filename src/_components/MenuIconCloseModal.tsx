import { MenuIconProps } from "@/interfaces/MenuIconInterface"
import Image from "next/image"

export const MenuIconCloseModal = ({ src, alt }: MenuIconProps) => {
    return (
        <button className="w-10 h-10 rounded-t-sm flex items-center justify-center bg-[var(--background-accent)] cursor-pointer">
            <Image
                src={src}
                alt={alt}
                width="30"
                height="30"
            />
        </button>
    )
}