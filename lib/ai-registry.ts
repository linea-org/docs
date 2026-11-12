/**
 * Model-to-provider key resolution for the docs assistant.
 *
 * Copied from `packages/ai/src/registry.ts` in `linea-org/linea` when the
 * docs site moved into its own repository. Keyed by exact model id and mapped
 * explicitly — never inferred from the string. Keep it in step with the
 * monorepo registry when adding a model to `modelCandidates`.
 */
const keyNameByModel: Record<string, string> = {
  "claude-opus-5": "ANTHROPIC_API_KEY",
  "claude-sonnet-5": "ANTHROPIC_API_KEY",
  "claude-fable-5": "ANTHROPIC_API_KEY",
  "claude-haiku-4-5-20251001": "ANTHROPIC_API_KEY",

  "gpt-5": "OPENAI_API_KEY",
  "gpt-5-mini": "OPENAI_API_KEY",
  "gpt-4.1": "OPENAI_API_KEY",
  "gpt-4o": "OPENAI_API_KEY",

  "openai/gpt-oss-120b": "GROQ_API_KEY",
  "openai/gpt-oss-20b": "GROQ_API_KEY",
  "groq/compound": "GROQ_API_KEY",
  "groq/compound-mini": "GROQ_API_KEY",

  "grok-4.5": "XAI_API_KEY",
}

type AiProviderInfo = {
  id: string
  label: string
  keyName: string
}

const providers: AiProviderInfo[] = [
  { id: "anthropic", label: "Anthropic", keyName: "ANTHROPIC_API_KEY" },
  { id: "openai", label: "OpenAI", keyName: "OPENAI_API_KEY" },
  { id: "groq", label: "Groq", keyName: "GROQ_API_KEY" },
  { id: "xai", label: "xAI", keyName: "XAI_API_KEY" },
]

/** Which environment variable holds the API key for a model's provider. */
export function resolveKeyName(model: string): string {
  const keyName = keyNameByModel[model]
  if (!keyName) {
    throw new Error(`No key name registered for model: "${model}"`)
  }
  return keyName
}

export function resolveProviderId(model: string): string | undefined {
  const keyName = keyNameByModel[model]
  return providers.find((provider) => provider.keyName === keyName)?.id
}
