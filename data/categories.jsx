export const categories = [
  { id: '1', name: 'Food' },
  { id: '2', name: 'Transport' },
  { id: '3', name: 'Salary' },
  { id: '4', name: 'Bills' },
];

export const transactionsByCategory = {
  '1': [
    { id: 't1', description: 'Pizza', amount: -20 },
    { id: 't2', description: 'Groceries', amount: -50 },
  ],
  '2': [
    { id: 't3', description: 'Bus ticket', amount: -3 },
    { id: 't4', description: 'Taxi', amount: -15 },
  ],
  '3': [
    { id: 't5', description: 'Monthly salary', amount: 3000 },
  ],
  '4': [
    { id: 't6', description: 'Electricity bill', amount: -100 },
    { id: 't7', description: 'Water bill', amount: -30 },
  ],
};
