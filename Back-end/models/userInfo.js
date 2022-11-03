'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class UserInfo extends Model {
        static associate(models) {
            UserInfo.belongsTo(models.User, { foreignKey: 'user_id' })
        }
    }
    UserInfo.init(
        {
            user_id: DataTypes.INTEGER,
            avatar: DataTypes.STRING,
            birthday: DataTypes.DATE,
            gender: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'UserInfo',
        },
    )
    return UserInfo
}
