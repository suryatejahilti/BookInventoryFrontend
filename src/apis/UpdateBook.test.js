import axios from "./axios";
import RegisterUser from "./RegisterUser";

jest.mock("./axios");

describe("RegisterUser", () => {
  const mockRegistrationRequest = {
    username: "testuser",
    password: "testpassword",
  };

  it("should register user successfully", async () => {
    const mockResponse = {
      data: {
        accessToken: "mockToken",
        roles: ["user"],
        name: "testuser",
      },
    };
    axios.post.mockResolvedValue(mockResponse);

    const result = await RegisterUser(mockRegistrationRequest);

    expect(result.user).toBe("testuser");
    expect(result.roles).toEqual(["user"]);
    expect(result.accessToken).toBe("mockToken");
  });

  it("should handle error on failed registration", async () => {
    const mockError = new Error("Mock error message");
    axios.post.mockRejectedValue(mockError);

    const result = await RegisterUser(mockRegistrationRequest);

    expect(result).toBeUndefined();
  });
});