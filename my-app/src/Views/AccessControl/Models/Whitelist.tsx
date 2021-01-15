export class Whitelist {
    id: bigint;
    name: string;
    ip: string;

    constructor(id : bigint, name : string, ip : string) {
        this.id = id;
        this.name = name;
        this.ip = ip;
    }
}
