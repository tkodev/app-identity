import { getHello } from "./hello";
import { mockHello } from '@/shared/constants/hello'

describe("#getHello", () => {
  it("returns the correct string", () => {
    expect(getHello(mockHello)).toEqual(mockHello);
  });
});
