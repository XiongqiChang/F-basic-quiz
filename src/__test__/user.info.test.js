import { getUserInfo } from "../resume/userinfo"


const mockgetUserInfo = jest.fn();
jest.mock("../resume/userinfo", () => {
 
    return jest.fn().mockImplementation(() => {
      return {
        getUserInfo: mockgetUserInfo
      };
    });
  });

test("should userinfobecalled", () => {
    mockgetUserInfo.mockImplementation(() => { });
    expect(getUserInfo).toHaveBeenCalled();
})
