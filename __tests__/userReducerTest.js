import userReducer from '../build/reducers/user';

const user = {
    user: {
        _id: '',
        userName: '',
        wishlists: [],
    },
    loggedIn: false,
};

describe("user reducer", () => {
    it("should login user", () => {
        expect(userReducer(user, { type: 'LOGIN', user: {_id: "123", userName: 'Test User', wishlists: []} }))
        .toEqual({
        _id: '123',
        userName: 'Test User',
        wishlists: [],
});
    });
    it.skip("should logout user");
    it.skip("add upstream");
    it.skip("remove upstream");
})