export type TProductCardType = "catalog" | "cart" | "liked";
export interface IProduct {
    id?: number,
    title: string,
    price: number,
    imageUrl: string,
    isCarted: boolean,
    isLiked: boolean
}
