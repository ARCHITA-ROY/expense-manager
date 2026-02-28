const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

const API_URL = "http://localhost:5000/api/expenses";

// Load all expenses
async function loadExpenses() {
  const res = await fetch(API_URL);
  const data = await res.json();
  expenseList.innerHTML = "";
  data.data.forEach(exp => {
    const li = document.createElement("li");
    li.textContent = `${exp.title} - $${exp.amount}`;
    expenseList.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, amount })
  });

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
  loadExpenses();
});

// Initial load
loadExpenses();