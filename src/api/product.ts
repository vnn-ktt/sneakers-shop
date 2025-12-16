import axios from "axios";
import type { IProduct } from "@/types/product";
import type {
    IQueryParams,
    IProductCarted,
    IProductLiked
} from "@/types/api";

export const getProducts =
    async (
        params: IQueryParams
    ): Promise<IProduct[]> => {
    const response = await axios.get(
        `https://db8e4288b5ac21f4.mokky.dev/items`,
        { params }
    );
    console.log(response);
    return response.data;
}

export const getLikedProducts =
    async (): Promise<IProductLiked[]> => {
        const response = await axios.get(
            `https://db8e4288b5ac21f4.mokky.dev/liked`
        );
        return response.data;
    }

export const getCartedProducts =
    async (): Promise<IProductCarted[]> => {
        const response = await axios.get(
            `https://db8e4288b5ac21f4.mokky.dev/carted`
        );
        return response.data;
    }