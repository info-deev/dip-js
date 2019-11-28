export const dateParse = (params) => {
  const d = new Date(params);
  return d.getDate()
    + '.' + (d.getMonth() + 1)
    + '.' + d.getFullYear()
}

export const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
}
