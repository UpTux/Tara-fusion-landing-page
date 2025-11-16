/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAILERLITE_API_TOKEN: string
  // Add more env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
