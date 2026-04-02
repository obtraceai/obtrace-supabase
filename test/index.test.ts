import test from "node:test";
import assert from "node:assert/strict";

import { initSupabaseSDK } from "../src/index.ts";

test("initSupabaseSDK returns sdk object with expected methods", () => {
  const sdk = initSupabaseSDK({ apiKey: "obt_test_key", serviceName: "test-edge" });
  assert.ok(typeof sdk.log === "function");
  assert.ok(typeof sdk.metric === "function");
  assert.ok(typeof sdk.captureError === "function");
  assert.ok(typeof sdk.span === "function");
  assert.ok(typeof sdk.shutdown === "function");
});
