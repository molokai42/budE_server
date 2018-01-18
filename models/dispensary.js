export default (sequelize, DataTypes) => {
  const Dispensary = sequelize.define('dispensary', {
    displayname: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'The username can only contain numbers and letters',
        },
        len: {
          args: [3, 25],
          msg: 'The username needs to be between 5 and 25 characters',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid Email',
        },
      },
    },
    password: DataTypes.STRING,
  });

  Dispensary.associate = (models) => {
    Dispensary.belongsToMany(models.Consumer, {
      through: 'customer',
      foreignKey: {
        name: 'dispensaryId',
        field: 'dispensary_id',
      },
    });
    Dispensary.belongsToMany(models.Consumer, {
      through: 'favorite',
      foreignKey: {
        name: 'dispensaryId',
        field: 'dispensary_id',
      },
    });
    Dispensary.hasOne(models.User, {
      through: 'user',
      foreignKey: {
        name: 'dispensaryId',
        field: 'dispensary_id',
      },
    });
  };
  return Dispensary;
};
