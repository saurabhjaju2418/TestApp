export class User {
    id: number;
    name = '';
    email = '';
    address = '';
    birthdate = '';
    gender = '';
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

