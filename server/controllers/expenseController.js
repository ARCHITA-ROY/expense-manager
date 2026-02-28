let expenses = [];

exports.getExpenses = (req, res) => {
  res.status(200).json({ success: true, data: expenses });
};

exports.addExpense = (req, res) => {
  const { title, amount } = req.body;
  if (!title || !amount) {
    return res.status(400).json({ success: false, message: "Title and amount required" });
  }
  const newExpense = { id: expenses.length + 1, title, amount };
  expenses.push(newExpense);
  res.status(201).json({ success: true, data: newExpense });
};