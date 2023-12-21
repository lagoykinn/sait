import Address from "./models/Address";
import Busket from "./models/Busket";
import Employee from "./models/Employee";
import Model from "./models/Model";
import Order from "./models/Order";
import Photo from "./models/Photo";
import Position from "./models/Position";
import Shoes from "./models/Shoes";
import Type from "./models/Type";
import User from "./models/User";
import Season from "./models/Season";
import Brand from "./models/Brand";
import Token from "./models/Token";
import Size from "./models/Size";

//USER

User.hasMany(Address);
Address.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Busket);
Busket.belongsTo(User);

User.hasMany(Token);
Token.belongsTo(User);

//ORDER

Order.hasMany(Employee);
Employee.belongsToMany(Order, { through: "employee_order" });

Employee.belongsTo(Position);
Position.hasMany(Employee);

Order.hasMany(Shoes);
Shoes.belongsTo(Order);

Order.hasOne(Busket);
Busket.belongsTo(Order);

Busket.hasMany(Shoes);
Shoes.belongsTo(Busket);

//SHOES + PHOTO

Shoes.hasMany(Photo);
Photo.belongsTo(Shoes);

//SHOES + SEASON

// Shoes.belongsToMany(Season, {
//     through: "shoes_season"
// });

// Season.belongsToMany(Shoes, {
//     through: "shoes_season"
// });

Season.belongsToMany(Model, {
    through: "model_season"
});

Season.belongsToMany(Brand, {
    through: 'brand_season'
})

//SHOES + TYPE

Shoes.belongsTo(Type, {
    foreignKey: 'typeId'
});

Type.hasMany(Shoes, {
    foreignKey: 'typeId'
});

Type.belongsTo(Season);

Type.hasMany(Model);

Type.belongsToMany(Brand, {
    through: "type_brand",
});

//SHOES + MODEL

Shoes.belongsTo(Model, {
    foreignKey: 'modelId'
});

Model.hasMany(Shoes, {
    foreignKey: 'modelId'
});

Model.belongsTo(Type);

Model.belongsToMany(Season, {
    through: "model_season"
});

//SHOES + SIZE

Size.hasOne(Shoes);

Shoes.belongsTo(Size);

//SHOES + BRAND

Shoes.belongsTo(Brand, {
    foreignKey: 'brandId'
});

Brand.hasMany(Shoes, {
    foreignKey: 'brandId'
});

Brand.hasMany(Model);

Model.belongsTo(Brand);

Brand.belongsToMany(Type, {
    through: "type_brand",
});

Brand.belongsToMany(Season, {
    through: 'brand_season'
})

export {
    Address,
    Busket,
    Employee,
    Model,
    Order,
    Photo,
    Position,
    Shoes,
    Type,
    User,
    Size,
};
