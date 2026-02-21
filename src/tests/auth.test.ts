import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
import { IncomingHttpHeaders } from "http";

describe("getAPIKey", () => {
  test("should return null if no Authorization header is present", () => {
    const headers = {} as IncomingHttpHeaders;
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("should return the API key when a valid Authorization header is present", () => {
    const headers = {
      authorization: "ApiKey 123456789",
    } as IncomingHttpHeaders;
    const key = getAPIKey(headers);
    expect(key).toBe("123456789");
  });
});
