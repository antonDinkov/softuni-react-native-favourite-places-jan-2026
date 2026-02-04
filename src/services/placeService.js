import { api } from "./api.js";

export async function create(placeData) {
    const result = await api.post('/places', placeData);

    return result.data;
}
