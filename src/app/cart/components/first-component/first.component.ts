import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import {
  ConstantsService,
  appDescription,
} from 'src/app/core/services/constants.service';
import { GeneratorService } from 'src/app/core/services/generator';
import {
  generatedString,
  GeneratorFactory,
} from 'src/app/core/services/generator.factory';

import { ProductModel } from '../../../products/models/ProductModel';
import { Categories, Stock } from '../../models/cartModel';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    { provide: ConstantsService, useValue: appDescription },
    {
      provide: generatedString,
      useFactory: GeneratorFactory(10),
      deps: [GeneratorService],
    },
  ],
})
export class FirstComponent implements OnInit {
  @Input() productItem!: ProductModel;

  name!: string;
  description!: string;
  price!: number;
  isAvaliable!: boolean;
  avaliableOnStocks?: Array<Stock>;
  lastBuyersID?: Array<number>;
  category: string | undefined;
  orderDate!: Date;
  additionalInfo!: any;
  lastProduct: boolean = false;

  constructor(
    @Optional() private appInformation: ConstantsService,
    @Optional() @Inject(generatedString) private genStr: string
  ) {}

  ngOnInit(): void {
    this.name = this.productItem.name;
    this.description = this.productItem.description;
    this.price = this.productItem.price;
    this.isAvaliable = this.productItem.isAvaliable;
    this.avaliableOnStocks = this.productItem.avaliableOnStocks;
    this.lastBuyersID = this.productItem.lastBuyersID;
    this.isAvaliable = this.productItem.isAvaliable;
    this.isAvaliable = this.productItem.isAvaliable;
    this.orderDate = new Date();
    this.additionalInfo = this.appInformation;

    const productAmountOnStocks = this.productItem.avaliableOnStocks.reduce(
      (sum, cur) => (sum += cur.productAmount),
      0
    );
    if (productAmountOnStocks === 1) {
      this.lastProduct = true;
    }

    switch (this.productItem.category) {
      case 'Book':
        this.category = Categories.Books;
        this.productItem.promoCode = this.genStr;

        break;
      case 'Toy':
        this.category = Categories.Toys;
        this.productItem.promoCode = this.genStr;

        break;
      case 'Food':
        this.category = Categories.Food;
        this.productItem.promoCode = this.genStr;
        break;
      case 'Electronics':
        this.category = Categories.Electronics;
        this.productItem.promoCode = this.genStr;
        break;

      default:
        this.category = undefined;
    }
  }
}
