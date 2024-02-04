export interface Payload {
  e: string;
  E: number;
  s: string;
  p: string;
  P: string;
  w: string;
  c: string;
  Q: string;
  o: string;
  h: string;
  l: string;
  v: string;
  q: string;
  O: number;
  C: number;
  F: number;
  L: number;
  n: number;
}

export interface UseWebSocketResult {
  data: Payload[];
  subscribe: (symbols: string[]) => void;
  unsubscribe: (symbols: string[]) => void;
}
