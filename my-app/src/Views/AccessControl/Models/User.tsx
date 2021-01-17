export class User {
    id: number;
    name: string;
    email: string;
    //roles: string[];

    constructor(id:number, name:string, email:string) {
        this.id = id;
        this.name = name;
        //this.roles = new Array<string>();
        this.email = email;
    }
    /*
    SetAdmin(admin:boolean): void {
        if(admin==false&&this.roles.includes("admin")) {
            this.roles.splice(this.roles.indexOf("admin"))
        } else if(admin) {
            this.roles.push("admin");
        }
    }
    */
}
