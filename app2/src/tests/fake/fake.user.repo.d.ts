import type { UserRepository } from "../../repositories/user.repo.js";
import type { User } from "../../types/users-types.js";
export declare class FakeUserRepo implements UserRepository {
    private users;
    save(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
//# sourceMappingURL=fake.user.repo.d.ts.map