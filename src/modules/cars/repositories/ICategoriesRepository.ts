import { Category } from "../infra/typeorm/entities/Category";

//DTO => Data Transfer Object
interface ICreateCategoryDto {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDto): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDto };
