import { makeAutoObservable } from 'mobx';
// import {} from 'mobx';
import { userModel } from '@/models/userModel';

class UserStore implements userModel {
    constructor() {
        makeAutoObservable(this);
    }
    name = 'world';

    get user(): string {
        return `hello ${this.name}`;
    }

    setName = (name: string): void => {
        this.name = name;
    };
}

// function UserStore(): userModel {
//     const store = makeAutoObservable({
//         name: 'world',

//         get user(): string {
//             return `hello ${this.name}`;
//         },

//         setName: (name: string) => {
//             store.name = name;
//         }
//     });
//     return store;
// }

export default UserStore;
