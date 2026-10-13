import type { UserRepository } from "../../repositories/user.repo.js";
import type { User } from "../../types/users-types.js";


export class FakeUserRepo implements UserRepository {
    private users: User[] = [];

    async save(user: User): Promise<User> {
        this.users.push(user);

        return user
    }

    async findByEmail(email: string): Promise<User | null> {
        return (
            this.users.find(user => user.email === email) ?? null
        )
    }
}