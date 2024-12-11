export class Products {
  id: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;

  constructor(id?: number, name?: string, brand?: string, price?: number,quantity?: number) {
    this.id = id || 0;
    this.name = name || '';
    this.brand = brand || '';
    this.price = price || 0;
    this.quantity = quantity || 0;
  }
}
