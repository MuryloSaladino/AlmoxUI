import { Injectable } from "@angular/core";
import { User, UserCreation } from "../../types/entities/user.entity";
import { Paginated } from "../../http/interfaces";
import { http } from "../../http";

@Injectable({ providedIn: "root" })
export class UserService {

	async create(userCreation: UserCreation) {
		return await http.post<User>("/users", userCreation);
	}

	async get(userId: string) {
		return await http.get<User>("/users/" + userId);
	}

	async getAll(query: string = "") {
		return await http.get<Paginated<User>>("/users" + query);
	}
}
