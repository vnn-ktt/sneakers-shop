export type TProductCardType = "catalog" | "cart";
export interface IProduct {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    isCarted: boolean,
    isLiked: boolean
}