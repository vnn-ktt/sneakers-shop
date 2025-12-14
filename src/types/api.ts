type TQueryValue = string | number | boolean;
export type TQueryParams = Record<string, TQueryValue>;
export interface IProductLiked {
    id: string;
    productId: string;
}
export interface IProductCarted {
    id: string;
    productId: string;
}