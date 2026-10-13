export class FakeUserRepo {
    users = [];
    async save(user) {
        this.users.push(user);
        return user;
    }
    async findByEmail(email) {
        return (this.users.find(user => user.email === email) ?? null);
    }
}
//# sourceMappingURL=fake.user.repo.js.map