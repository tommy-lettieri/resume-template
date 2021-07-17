import { PUBLIC_URL } from '../environment';

export const resolveUrl = (s: string) => s.startsWith('/') ? `${PUBLIC_URL}${s}` : s;