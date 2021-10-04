import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Optional,
} from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import {
  LocalStorageService,
  localStorageInstance,
} from 'src/app/core/services/local-storage.service';
import { GeneratorService } from './core/services/generator';
import { ProductModel } from './products/models/ProductModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: LocalStorageService,
      useValue: localStorageInstance,
    },
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef<HTMLHeadingElement>;

  selectedProduct: ProductModel[];
  fullPrice: number;

  constructor(
    private cartService: CartService,
    @Optional() private localStorage: LocalStorageService,
    @Optional() private generatorService: GeneratorService
  ) {
    this.selectedProduct = this.cartService.getProducts();
    this.fullPrice = this.cartService.getFullPrice();
  }
  ngOnInit() {
    this.localStorage.clear();
  }
  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Caramba shop';
  }

  onAddProductItem(productItem: ProductModel) {
    this.cartService.addProduct(productItem);
    if (!this.localStorage.getItem('session_ID')) {
      const date = new Date();
      this.localStorage.setItem(
        'sessionStart_ID',
        String(this.generatorService.getNewID() + '_' + String(date))
      );
    }
  }

  onRemoveProductItem(productItem: ProductModel) {
    this.cartService.removeProduct(productItem);
  }
}
