import { CartService } from 'src/app/cart/services/cart.service';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { ProductModel } from './products/models/ProductModel';

import {
  appDescription,
  ConstantsService,
} from './core/services/constants.service';
import {
  generatedString,
  GeneratorFactory,
} from './core/services/generator.factory';
import { GeneratorService } from './core/services/generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: ConstantsService, useValue: appDescription },
    {
      provide: generatedString,
      useFactory: GeneratorFactory(10),
      deps: [GeneratorService],
    },
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef<HTMLHeadingElement>;

  selectedProduct: ProductModel[];
  fullPrice: number;

  constructor(
    private cartService: CartService,
    private appInformation: ConstantsService,
    @Inject(generatedString) private genStr: string
  ) {
    this.selectedProduct = this.cartService.getProducts();
    this.fullPrice = this.cartService.getFullPrice();
  }

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Caramba shop';
  }

  onAddProductItem(productItem: ProductModel) {
    this.cartService.addProduct(productItem);
  }

  onRemoveProductItem(productItem: ProductModel) {
    this.cartService.removeProduct(productItem);
  }
}
