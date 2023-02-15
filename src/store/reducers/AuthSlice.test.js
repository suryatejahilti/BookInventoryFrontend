import AuthReducer, { setAuth, startLoading, handleLogout, getAuth, getisLoading } from "./AuthSlice";

describe("AuthSlice", () => {
  let state = AuthReducer(undefined, {});

  it("should return the initial state", () => {
    expect(state.auth).toBe(null);
    expect(state.isLoading).toBe(true);
  });

  it("should handle setAuth", () => {
    const payload = { username: "testuser" };
    state = AuthReducer(state, setAuth(payload));
    expect(state.auth).toEqual(payload);
    expect(state.isLoading).toBe(false);
  });

  it("should handle startLoading", () => {
    state = AuthReducer(state, startLoading());
    expect(state.isLoading).toBe(true);
  });

  it("should handle handleLogout", () => {
    state = AuthReducer(state, handleLogout());
    expect(state.auth).toBe(null);
  });

  it("should get the auth state", () => {
    expect(getAuth({ auth: state })).toEqual(state.auth);
  });

  it("should get the isLoading state", () => {
    expect(getisLoading({ auth: state })).toEqual(state.isLoading);
  });
});