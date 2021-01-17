import {User} from "./User";
import {Whitelist} from "./Whitelist";

export class StartData {
    users: User[]
    whitelists: Whitelist[]

    constructor() {
        this.users = new Array<User>();
        this.users.push(new User(1, "", ""));
        this.whitelists = new Array<Whitelist>();
        this.whitelists.push(new Whitelist(1, "", ""));
    }
}
