import { ChangeEvent } from "react"

export interface InputModalContactInterface {
    text: string
    id: string
    name: string
    type: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}