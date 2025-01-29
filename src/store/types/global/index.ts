export type TRequestStatus = {
  isLoading: boolean | null;
  isError: boolean | null;
};

export interface IItemsWithRequestStatus<T> extends TRequestStatus {
  items: T[];
}
