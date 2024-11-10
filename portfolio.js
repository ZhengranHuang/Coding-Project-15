//Task2: Create the Portfolio Module
import {assetList} from './asset.js';

export function calculatePortfolioValue() {
return assetList.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
};
const totalPortfolioValue = calculatePortfolioValue();
export function getPortfolioAllocation(){
return asset.map(asset => (asset.price*asset.quantity)/totalPortfolioValue)*100;
}