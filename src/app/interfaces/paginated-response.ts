export interface PaginatedResponse<T> {
  total: number;
  data: T[];
}
