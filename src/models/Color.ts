'use strict';
import { DataTypes } from "sequelize";
import sequelizeConnection from "../db/connection";
import Color from "./classes/ColorModel";
Color.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bar_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "colors",
    sequelize: sequelizeConnection,
    modelName: "Color",
  }
);
export default Color