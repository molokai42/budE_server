export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email already in use!',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid Email',
        },
      },
    },
    password: DataTypes.STRING,
  });

  return User;
};
