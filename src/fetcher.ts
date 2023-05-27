import { context, tracer } from "./OTEL-initializer.ts";

export async function fetcher(url: string) {
  const span = tracer.startSpan('handler', undefined, context.active());
  const res = await fetch(url);
  const txt = await res.text();
  span.end();
  return txt;
}
