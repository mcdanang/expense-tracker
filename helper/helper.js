export const getNewID = (data) => {
  return data[data.length - 1].id + 1;
}

export const getExpenseIndexByID = (data, requestedID) => {
  return data.findIndex(el => el.id == requestedID);
}