import userReducer from '..build/reducers/user';

const user = {

}

describe("user reducer", () => {
    it("should login user", () => {
        expect(userReducer(user, { type: 'LOGIN', user: {_id: "123", email: "test@test.com" , endPoints: []} }));   .toEqual
    });
    it.skip("should logout user");
    it.skip("add upstream");
    it.skip("remove upstream");
})