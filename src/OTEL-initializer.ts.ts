import { trace, context } from '@opentelemetry/api';
import { registerOTel } from '@vercel/otel';

registerOTel('next-app-dir-tracing');

export const tracer = trace.getTracer('next-app-dir-tracing-tracer');
export { context };
