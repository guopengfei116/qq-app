export const PAGE_SIZES = [20, 40, 60, 80, 100];
Object.freeze(PAGE_SIZES);

export default class Pagination {
  static pageSizes = PAGE_SIZES;
  static total = 0;

  pageIndex = 1;
  pageSize = PAGE_SIZES[0];
}
