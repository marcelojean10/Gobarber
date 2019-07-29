module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    date: DataTypes
  });

  Appointment.associate = models => {
    Appointment.belongsTo(models.USER, { foreignKey: "user_id" });
    Appointment.belongsTo(models.USER, { foreignKey: "provider_id" });
  };

  return Appointment;
};
