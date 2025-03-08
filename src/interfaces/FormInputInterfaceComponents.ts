import { ChangeEvent } from "react"

export interface FormInputInterfaceComponents {
    text: string
    id: string
    name: string
    value: string
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}