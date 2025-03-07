export interface CardClientProps {
    items: CardClientReviewProps[]
}

interface CardClientReviewProps {
    src: string
    name: string
    subtitle: string
    text: string
}