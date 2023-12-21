class UserDto {
    id: number;
    email: string;
    isActivated: boolean;

    constructor(model) {
        this.id = model.dataValues.id;
        this.email = model.dataValues.email;
        this.isActivated = model.dataValues.isActivated;
    }
}

export default UserDto;
