
export function formatCurrency(amount) {
  const sign = amount < 0 ? '-' : '';
  const formatted = Math.abs(amount).toFixed(2);
  return `${sign}$${formatted}`;
}