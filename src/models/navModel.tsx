// 创建store类型接口
export interface navModel {
    openKeys: string[];
    selectedKeys: string[];
    setOpenKeys(keys: string[]): void;
    setSelectedKeys(keys: string[]): void;
}
