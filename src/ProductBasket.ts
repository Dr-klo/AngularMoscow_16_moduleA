import {IProduct} from "@common/api/IProduct";
import {IUser} from "../../Contracts/src/api/IUser";

export class ProductBasket {
    protected products:  IProduct[];
    constructor(private owner: IUser){
        this.products = new Array();
    }
    public Add(product: IProduct): void{
        let existingProduct = this.products.find(p=>p.id == product.id);
        if (existingProduct) {
            existingProduct.count+=product.count;
        } else  {
            this.products.push(product);
        }
    }
    public Remove(id: number){
        const index= this.products.findIndex(p=> p.id == id);
        if (index>=0) {
            this.products.splice(index, 1);
        }
    }
    public getList(): IProduct[] {
        return this.products.slice();
    }
}
