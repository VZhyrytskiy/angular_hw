import { Stock } from 'src/app/cart/models/cartModel';

export interface ProductModel {
  name: string;
  description: string;
  price: number;
  category?: string | undefined;
  isAvaliable: boolean;
  avaliableOnStocks: Array<Stock>;
  lastBuyersID: Array<number>;
  orderDate?: Date;
  amountInBasket?: number;
  promoCode?: string;
}
