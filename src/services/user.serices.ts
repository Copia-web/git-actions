import type { UserRepository } from "../repositories/user.repo.js";
import type { User } from "../types/users-types.js";


export class UserService {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async createUser(
        name: string,
        email: string,
        age: number
    ): Promise<User> {
        if (!name.trim()) {
            throw new Error("Name is required");
        }

        if (!email.includes("@")) {
            throw new Error("Invalid email");
        }

        if (age < 18) {
            throw new Error("User must be at least 18");
        }

        const user: User = {
            id: crypto.randomUUID(),
            name,
            email,
            age,
        };

        return this.userRepository.save(user);
    }
}