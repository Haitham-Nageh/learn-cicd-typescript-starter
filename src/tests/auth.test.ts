import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("should return null if no Authorization header is present", () => {
    const headers = {};
    const result = getAPIKey(headers as any);
    expect(result).toBeNull();
  });

  test("should return the API key when a valid Authorization header is present", () => {
    const headers = {
      authorization: "ApiKey 123456789",
    };
    const key = getAPIKey(headers as any);
    expect(key).toBe("123456789");
  });
});
