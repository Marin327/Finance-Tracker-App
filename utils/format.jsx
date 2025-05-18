export function formatCurrency(amount) {
  return `${amount < 0 ? '-' : ''}$${Math.abs(amount).toFixed(2)}`;
}