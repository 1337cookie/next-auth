import type { CommonProviderOptions } from "."

export interface OpenIDProviderButtonStyles {
  logo: string
  logoDark: string
  bg: string
  bgDark: string
  text: string
  textDark: string
}

export interface OpenIDConfig extends CommonProviderOptions {
  type: "openid"
  style?: OpenIDProviderButtonStyles,
  options?: OpenIDUserConfig
}

export type OpenIDUserConfig = Partial<Omit<OpenIDConfig, "options">>

export type OpenIDProvider = (options: OpenIDUserConfig) => OpenIDConfig

export type OpenIDProviderType = "OpenID"

export default function OpenID(options) {
  return {
    id: "openid",
    name: "OpenID",
    type: "openid",
    options,
  }
}