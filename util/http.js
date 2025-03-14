import axios from "axios";

const FIREBASE_URL =
  "https://react-native-course-36978-default-rtdb.firebaseio.com1";

export async function storeExpenses(expenseData) {
  const response = await axios.post(
    FIREBASE_URL + "/expenses.json",
    expenseData,
  );
  return response.data.name;
}

export async function fetchExpenses() {
  const response = await axios.get(FIREBASE_URL + "/expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(FIREBASE_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(FIREBASE_URL + `/expenses/${id}.json`);
}
