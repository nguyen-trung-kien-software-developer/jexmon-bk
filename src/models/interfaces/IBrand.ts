import Sequelize, { Optional } from "sequelize";
export interface IBrandModel extends Sequelize.Model {
  id: number;
  name: string;
  featured_image: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface BrandAttributes {
  id: number;
  name: string;
  featured_image: string;
  createdAt: Date;
  updatedAt: Date;
}
export type BrandInput = Optional<BrandAttributes, "id">;
export type BrandOutput = Required<BrandAttributes>;