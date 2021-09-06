const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Attendance extends Model {}

Attendance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    isPresent: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },

    time: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Student",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Attendance",
  }
);

module.exports = Attendance;