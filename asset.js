//Task1:Create the Asset Module
export const assetList = [
    { id: 1, name: 'Trump', type:'stock',price: 10, quantity:1},
    { id: 2, name: 'bob', type:'bond',price: 150, quantity:1000},
];

export function getassetById(id) {
    return assetList.find(asset => asset.id === id);
}