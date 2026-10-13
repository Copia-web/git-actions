import type { UserRepository } from "../repositories/user.repo.js";
import type { User } from "../types/users-types.js";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(name: string, email: string, age: number): Promise<User>;
}
//# sourceMappingURL=user.serices.d.ts.map