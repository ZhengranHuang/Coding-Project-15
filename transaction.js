//Task3：Create the Transaction Module
import {assetList,getassetById} from './asset.js';

export class Transaction{
constructor(assetId, type, quantity){
this.assetId = assetId;
this.type = type;
this.quantity = quantity;
this.checkTransaction();
}
checkTransaction(){
const assetId = getassetById(this.assetId);
if(this.type = 'stock'&'bond'){
assetId.quantity -= this.quantity
}if(assetId.quantity< this.quantity){
throw new Error(`Quantity not enough`);
}
if(!type){
throw new Error(`Type not fund`);
}
}
}