export function getItem(key) {
  const serializedItem = localStorage.getItem(key);

  if (serializedItem === null) {
    return undefined;
  }

  return JSON.parse(serializedItem);
}

export function setItem(key, data) {
  try {
    const serializedItem = JSON.stringify(data);
    localStorage.setItem(key, serializedItem);
  } catch (e) {
    // do something with error
    console.log('Error saving to local storage ', e);
  }
}
