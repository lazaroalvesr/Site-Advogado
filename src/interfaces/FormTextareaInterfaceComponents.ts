import { ChangeEvent } from "react"

export interface FormTextareaInterfaceComponents {
    text: string
    id: string
    name: string
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}