//Task4:Create the Main Application
import { calculatePortfolioValue,getPortfolioAllocation } from "./portfolio";
import { Transaction } from "./transaction";

console.log('Portfolio Value =',calculatePortfolioValue());
console.log('Portfolio Percentages =', getPortfolioAllocation());
console.log('Transaction:',Transaction());