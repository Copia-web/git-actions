import { beforeEach, describe, expect, it } from "vitest";
import { UserService } from "../../services/user.serices.js";
import { FakeUserRepo } from "../fake/fake.user.repo.js";

describe("User services", () => {
    let fakeRepo: FakeUserRepo
    let service: UserService;

    beforeEach(() => {
        fakeRepo = new FakeUserRepo();
        service = new UserService(fakeRepo);
    })
    it("creates a user", async () => {
        //arrange


        //act
        const user = await service.createUser("Joe", "test@test.com", 20);
        expect(user.name).toBe("Joe");
        expect(user.email).toBe("test@test.com")

    })
})