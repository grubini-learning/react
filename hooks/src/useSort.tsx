import { useState } from "react";
import { Column } from "./App";

const enum SortOrder {
  asc = "asc",
  desc = "desc",
}

export const useSort = <T,>(data: T[], config: Column<T>[]) => {
  const [sortOrder, setSortOrder] = useState<SortOrder | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const handleSort = (label: string) => {
    let sortLiteral: string | null = label;
    let sortDirection: SortOrder | null = null;

    if ((sortBy && label !== sortBy) || sortOrder === null) {
      sortDirection = SortOrder.asc;
    } else if (sortOrder === SortOrder.asc) {
      sortDirection = SortOrder.desc;
    } else if (sortOrder === SortOrder.desc) {
      sortLiteral = null;
    }

    setSortOrder(sortDirection);
    setSortBy(sortLiteral);
  };

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue function and use it for sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy)!;
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === SortOrder.asc ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    handleSort,
  };
};
