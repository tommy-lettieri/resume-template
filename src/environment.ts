const IS_STORYBOOK = Boolean(process.env.STORYBOOK);
// if storybook use storybook it's env variable and fallback to /resume
// else use PUBLIC_URL and default to empty string
export const PUBLIC_URL = (IS_STORYBOOK ? (process.env.STORYBOOK_PUBLIC_URL ?? '/resume') : process.env.PUBLIC_URL) ?? '';
