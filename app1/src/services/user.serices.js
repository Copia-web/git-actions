export class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(name, email, age) {
        if (!name.trim()) {
            throw new Error("Name is required");
        }
        if (!email.includes("@")) {
            throw new Error("Invalid email");
        }
        if (age < 18) {
            throw new Error("User must be at least 18");
        }
        const user = {
            id: crypto.randomUUID(),
            name,
            email,
            age,
        };
        return this.userRepository.save(user);
    }
}
//# sourceMappingURL=user.serices.js.map