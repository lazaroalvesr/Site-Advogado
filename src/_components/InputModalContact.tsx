import { InputModalContactInterface } from "@/interfaces/InputModalContactInterface"

export const InputModalContact = ({ text, type, id, name, value,onChange }: InputModalContactInterface) => {
    return (
        <input
            className="w-full border border-gray-500 p-2 rounded-sm outline-none"
            placeholder={text}
            type={type}
            id={id}
            value={value}
            name={name}
            onChange={onChange}
            required
        />
    )
}