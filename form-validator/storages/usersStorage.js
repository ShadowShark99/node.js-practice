// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = {
      id,
      firstName,
      lastName,
      email,
      ...(age !== undefined && { age }),
      ...(bio !== undefined && { bio }),
    };
    console.log(this.storage[id]);
    this.id++;
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  findUsers(name){
    const users = [];
    while(name.search(/W/) !== -1)
    {
      const idx = name.search(/W/);
      name = name.substr(0, idx) + name.substr(idx + 1);
    }
    name = name.toLowerCase();
    console.log("name is not constant");
    for( let i = 0; i < this.id; i++)
    {
      const user = this.storage[i];
      if(user)
      {
        let fullName = user.firstName + user.lastName;
        fullName = fullName.toLowerCase();
        let email = user.email.toLowerCase();
        const searchLength = name.length;
        const fLength = fullName.length;
        const eLength = email.length;
        let found = false;
        for(let f = 0; f <= fLength - searchLength; f++)
        {
          if(fullName.substr(f, searchLength) === name)
          {
            users.push(user);
            found = true;
            break;
          }
        }
        if(!found)
          for(let e = 0; e <= eLength - searchLength; e++)
          {
            if(email.substr(e, searchLength) === name)
            {
              users.push(user);
              break;
            }
          }

      }
    }
    return users;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName }) {
    this.storage[id] = { id, firstName, lastName };
  }

  
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
