
import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from 'src/app/products/models/ProductModel';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    value: ProductModel[],
    key: string,
    isAsc: boolean,
    ...args: any[]
  ): ProductModel[] {
    if (isAsc) {
      return value.sort((a: any, b: any) => b[key] - a[key]);
    } else {
      return value.sort((a: any, b: any) => b[key] - a[key]);
    }
  }
}
