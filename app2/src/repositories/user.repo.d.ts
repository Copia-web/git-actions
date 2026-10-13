import type { User } from "../types/users-types.js";
export interface UserRepository {
    save(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
//# sourceMappingURL=user.repo.d.ts.map