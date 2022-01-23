export const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    console.log(data);
    console.log(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
};

export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
