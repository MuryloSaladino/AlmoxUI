import { Injectable } from "@angular/core";
import { http } from "../../http";
import { Paginated } from "../../http/interfaces";
import { Item, ItemCreation, ItemUpdate } from "../../types/entities/items.types";

@Injectable({ providedIn: "root" })
export class ItemService {

	async create(itemCreation: ItemCreation) {
		return await http.post<Item>("/items", itemCreation);
	}

	async get(itemId: string) {
		return await http.get<Item>("/items/" + itemId);
	}

	async getAll(query: string = "") {
		return await http.get<Paginated<Item>>("/items" + query);
	}

	async delete(itemId: string) {
		return await http.delete("/items/" + itemId);
	}

	async update(itemUpdate: ItemUpdate) {
		return await http.put<Item>("/items", itemUpdate);
	}

	async updateImage(itemId: string, image: Blob) {
		return http.put<Item>(`/items/${itemId}/image`, image, {
			bodyType: "blob"
		});
	}
}
