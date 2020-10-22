import { getUserInfo } from "../resume/userinfo";

const mockgetUserInfo = jest.fn();
// TODO GTB-2: - 不应该mock被测方法，应该mock其依赖（axios等）
jest.mock("../resume/userinfo", () => {
  // TODO GTB-3: - 箭头函数的return可以简写
  // TODO GTB-2: - 这里的mock写的有点问题，return的不是jest.fn
  return jest.fn().mockImplementation(() => {
    return {
      getUserInfo: mockgetUserInfo,
    };
  });
});

// TODO GTB-2: - getUserInfo是异步方法，需要使用异步测试
test("should userinfobecalled", () => {
  mockgetUserInfo.mockImplementation(() => {});
  // TODO GTB-2: - 不应该expect getUserInfo，应该测其方法调用的副作用及返回值
  expect(getUserInfo).toHaveBeenCalled();
});
