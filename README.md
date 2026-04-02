# @obtrace/supabase

Obtrace SDK for Supabase Edge Functions (Deno runtime).

## Install

```bash
npm install @obtrace/supabase
```

## One-line auto-init

Import once per edge function — the SDK reads `OBTRACE_API_KEY` and `OBTRACE_SERVICE_NAME` from Deno env automatically:

```ts
// supabase/functions/my-function/index.ts
import "@obtrace/supabase";

Deno.serve(async (req) => {
  return new Response("ok");
});
```

Set secrets in Supabase dashboard (Project Settings > Edge Functions > Secrets):

```
OBTRACE_API_KEY=obt_live_xxxxx
OBTRACE_SERVICE_NAME=my-edge
```

## Explicit init

```ts
import { initSupabaseSDK } from "@obtrace/supabase";

const sdk = initSupabaseSDK({
  apiKey: Deno.env.get("OBTRACE_API_KEY")!,
  serviceName: "my-edge",
});

sdk.log("info", "function invoked");
sdk.metric("requests.count", 1);
```

## Shared init pattern

```ts
// supabase/functions/_shared/obtrace.ts
import "@obtrace/supabase";
```

```ts
// supabase/functions/process-sale/index.ts
import "../_shared/obtrace.ts";

Deno.serve(async (req) => { /* ... */ });
```

## API

```ts
sdk.log(level, message, context?)
sdk.metric(name, value, unit?, context?)
sdk.span({ name, attrs?, statusCode?, statusMessage? })
sdk.captureError(error, context?)
sdk.shutdown()
```

## Docs

- [Supabase integration guide](https://docs.obtrace.ai/docs/platforms/supabase)
- [SDK Catalog](https://docs.obtrace.ai/docs/sdks/catalog)
