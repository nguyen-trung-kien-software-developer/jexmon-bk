import Sequelize, { Optional } from "sequelize";
export interface ICategoryModel extends Sequelize.Model {
  id: number;
  name: string;
  featured_image: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CategoryAttributes {
  id: number;
  name: string;
  featured_image: string;
  createdAt: Date;
  updatedAt: Date;
}
export type CategoryInput = Optional<CategoryAttributes, "id">;
export type CategoryOutput = Required<CategoryAttributes>;