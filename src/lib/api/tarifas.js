// lib/api/tarifas.js
export const fetchTarifas = async (year) => {
  const response = await fetch(`https://www.electrohuila.com.co/wp-json/electrohuila/v1/tarifas-simple/${year}`);
  return response.json();
};