import { Address } from "./Address";
import { Store } from "./Store";

export interface Merchant {
    id: Number,
    name: string,
    website: string,
    description: string,
    logo: string,
    addresses: Array<Address>,
    stores: Array<Store>
}