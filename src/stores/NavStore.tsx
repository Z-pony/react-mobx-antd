import { makeAutoObservable } from 'mobx';
// import {} from 'mobx';
import { navModel } from '@/models/navModel';

class NavStore implements navModel {
    constructor() {
        makeAutoObservable(this);
    }
    openKeys = [];
    selectedKeys = [];
    setOpenKeys = (keys: string[]): void => {
        this.openKeys = keys;
    };
    setSelectedKeys = (keys: string[]) => {
        this.selectedKeys = keys;
    };
}

export default NavStore;
