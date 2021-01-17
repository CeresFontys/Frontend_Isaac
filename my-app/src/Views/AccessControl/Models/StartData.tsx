import {User} from "./User";
import {Whitelist} from "./Whitelist";

export class StartData {
    users: User[]
    whitelists: Whitelist[]

    constructor() {
        this.users = new Array<User>();
        this.whitelists = new Array<Whitelist>();
    }
}
