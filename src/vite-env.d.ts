/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_RECAPTCHA_SITE_KEY: string;
  VITE_BASE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
