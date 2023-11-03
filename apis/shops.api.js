async function fetchShops() {
  const response = await fetch(`https://6541275ff0b8287df1fded95.mockapi.io/api/v1/shops/`);
  const data = await response.json();
  return data;
}
export { fetchShops };