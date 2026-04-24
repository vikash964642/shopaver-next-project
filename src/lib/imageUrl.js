import { ASSET_BASE_URL } from "@/lib/env";

export function resolveAssetUrl(value, fallback = "") {
  if (!value) return fallback;

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  if (value.startsWith("//")) {
    return `https:${value}`;
  }

  return `${ASSET_BASE_URL}${value}`;
}
