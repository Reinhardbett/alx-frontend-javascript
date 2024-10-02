export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    // Use ES6 object shorthand syntax to assign values on function call
    income,
    gdp,
    capita,
  };

  return budget;
}
