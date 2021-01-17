export class User {
    id: number;
    name: string;
    email: string;
    isAdmin: number;
    password: string;

    constructor(id:number, name:string, email:string, isAdmin:number, password?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
        this.password = password;
    }
}
