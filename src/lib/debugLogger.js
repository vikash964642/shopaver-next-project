import { appendFile, mkdir } from "fs/promises";
import path from "path";

const DEBUG_DIR = path.join(process.cwd(), "debug-logs");
const DEBUG_FILE = path.join(DEBUG_DIR, "service-page.log");

async function ensureDebugDir() {
  await mkdir(DEBUG_DIR, { recursive: true });
}

export async function writeDebugLog(level, message, meta = {}) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...meta,
  };

  await ensureDebugDir();
  await appendFile(DEBUG_FILE, `${JSON.stringify(entry)}\n`, "utf8");
}

export function getDebugLogPath() {
  return DEBUG_FILE;
}
