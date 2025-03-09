import { TextAreaModalContactInterface } from "@/interfaces/TextAreaModalContactInterface"

export const TextAreaModalContact = ({ text, id, name }: TextAreaModalContactInterface) => {
    return (
        <textarea
            id={id}
            name={name}
            className="w-full border border-gray-500 p-2 rounded-sm resize-none outline-none h-24"
            placeholder={text}
        />
    )
}