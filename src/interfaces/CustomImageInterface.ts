export interface PropsImage {
    items: CustomImageProps[]
}

interface CustomImageProps {
    linkUrl: string
    src: string
    alt: string
    width?: number
    height?: number
}