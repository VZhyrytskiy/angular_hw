import { ProductModel } from 'src/app/products/models/ProductModel';

export enum Categories {
  Books = 'Books',
  Toys = 'Toys',
  Food = 'Food',
  Electronics = 'Electronics',
}

export interface Stock {
  stockID: number;
  stockName: string;
  productAmount: number;
}

export interface SelectedProducts extends ProductModel {
  fullPrice: number;
}
