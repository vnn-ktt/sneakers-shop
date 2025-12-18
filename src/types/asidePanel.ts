export type TAsideContent = 'cart' | 'liked';
export interface IAsideComponentProps {
    content: TAsideContent,
    title: string
}