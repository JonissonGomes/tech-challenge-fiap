import { ECategory } from "../domain/useCases/Products/ProductDTO";

export interface IProduct {
  _id?: string;
  name: string;
  category: ECategory;
  description?: string;
  price: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
  