import { Revenue } from "./definitions";

// Format currency to display in thousands with the rupee symbol.
export const formatCurrency = (amount: number) => {
  return `₹${(amount / 1000).toLocaleString("en-IN")}K`;
};

// Format date to a more readable local format.
export const formatDateToLocal = (
  dateStr: string,
  locale: string = "en-IN"
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

// Generate Y-axis labels with a maximum of 6 labels and rupee symbol.
export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate highest record and set the top label
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const step = Math.ceil(highestRecord / 6 / 1000) * 1000; // Determine step size
  const yAxisLabels = [];

  for (let i = step; i >= 0; i -= step) {
    yAxisLabels.push(`₹${i / 1000}K`);
  }

  return { yAxisLabels: yAxisLabels.slice(0, 6), topLabel: highestRecord };
};

// Generate pagination with ellipses when necessary.
export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or fewer, display all pages.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3, show the first 3, ellipsis, and last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3, show the first 2, ellipsis, and last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle, show first page, ellipsis, current page and its neighbors, another ellipsis, and last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
