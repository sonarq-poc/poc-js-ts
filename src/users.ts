interface Users {
    name: string;
    id: number;
  }
  
 export class UserAccount {
    name: string;
    id: number;
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }

// Comment test
const user: Users = new UserAccount("Murphy", 1);
