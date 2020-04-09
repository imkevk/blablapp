export interface AllDocsResponse<T> {
  offset: number;
  total_rows: number;
  rows: Row<T>[];
}

interface Row<T> {
  doc: T;
}

export interface PostResponse {
  ok: boolean;
  id: string;
  rev: string;
}