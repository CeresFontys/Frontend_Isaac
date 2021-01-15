import {User} from "./User";
import {Whitelist} from "./Whitelist";

export class StartData {
    users: User[]
    whitelists: Whitelist[]

    constructor() {
        this.users = new Array<User>();
        this.users.push(new User(1, "Test User 1", "User1@test.nl"));
        this.users.push(new User(2, "Test User 2", "User2@test.nl"));
        this.users.push(new User(3, "Test User 3", "User3@test.nl"));
        this.users.push(new User(4, "Test User 4", "User4@test.nl"));
        this.users.push(new User(5, "Test User 5", "User5@test.nl"));
        this.users.push(new User(6, "Test User 6", "User6@test.nl"));
        this.users.push(new User(7, "Test User 7", "User7@test.nl"));
        this.users.push(new User(8, "Test User 8", "User8@test.nl"));
        this.whitelists = new Array<Whitelist>();
        this.whitelists.push(new Whitelist(1, "Locatie 1", "243.59.159.157"));
        this.whitelists.push(new Whitelist(2, "Locatie 2", "65.177.230.11"));
        this.whitelists.push(new Whitelist(3, "Locatie 3", "132.211.200.60"));
        this.whitelists.push(new Whitelist(4, "Locatie 4", "168.124.240.142"));
        this.whitelists.push(new Whitelist(5, "Locatie 5", "186.110.93.69"));
        this.whitelists.push(new Whitelist(6, "Locatie 6", "133.27.40.40"));
        this.whitelists.push(new Whitelist(7, "Locatie 7", "118.187.82.81"));
    }
}
