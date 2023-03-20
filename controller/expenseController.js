import fs from "fs";
import { getNewID, getExpenseIndexByID } from "../helper/helper.js";

const data = JSON.parse(fs.readFileSync("./data/expense.json"));

export const getExpensesByQuery = async (req, res) => {
  const filter = req.query;
  let filteredData = data;

  if (filter.category) filteredData = data.filter((el) => el.category == filter.category);

  if (filter.date_start) {
    const dateStart = new Date(filter.date_start);
    filteredData = filteredData.filter((el) => new Date(el.date) >= dateStart);
  }

  if (filter.date_end) {
    const dateEnd = new Date(filter.date_end);
    filteredData = filteredData.filter((el) => new Date(el.date) <= dateEnd);
  }

  if (filteredData.length) res.status(200).send(filteredData);
  else res.status(404).send('Not Found');
}

export const getExpenseDetail = async (req, res) => {
  let filteredData = data.filter(el => el.id == req.params.id);

  if (filteredData.length) res.status(200).send(filteredData);
  else res.status(404).send('Not Found');
}

export const addNewExpense = async (req, res) => {
  const newExpense = req.body;
  if (Object.keys(newExpense).length) {
    data.push({
      id: getNewID(data),
      ...newExpense
    })
    fs.writeFileSync("./data/expense.json", JSON.stringify(data));
    res.status(200).send("New expense has been added");
  }
  else res.status(400).send('Bad Request');
}

export const editExpense = async (req, res) => {
  const index = getExpenseIndexByID(data, req.params.id);
  if (index == -1 || Object.keys(req.body).length === 0) {
    res.status(400).send('Bad Request');
  } else {
    data[index] = req.body;
    fs.writeFileSync("./data/expense.json", JSON.stringify(data));
    res.status(200).send(`Data for id ${req.params.id} has been updated`);
  }
}

export const deleteExpense = async (req, res) => {
  const index = getExpenseIndexByID(data, req.params.id);
  if (index == -1) {
    res.status(404).send('Not Found');
  } else {
    data.splice(index, 1);
    fs.writeFileSync("./data/expense.json", JSON.stringify(data));
    res.status(200).send(`Data for id ${req.params.id} has been deleted`);
  }
}