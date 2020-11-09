// 操作localStorage
export const local = {
    /**
     * // 设置localStorage
     * @param {string} name
     * @param {any} value
     */
    setItem(name, value) {
        if (!name) return null;
        if (!value) {
            window.localStorage.removeItem(name);
        } else {
            const v = typeof value === 'object' ? JSON.stringify(value) : value;

            window.localStorage.setItem(name, v);
        }
    },
    /**
     * // 获取localStorage
     * @param {string} name
     */
    getItem(name) {
        if (!name || typeof name !== 'string') return null;
        return window.localStorage.getItem(name);
    },
    removeItem(name) {
        if (!name || typeof name !== 'string') return null;
        return window.localStorage.removeItem(name);
    }
};

// 操作sessionStorage
export const session = {
    /**
     * // 操作sessionStorage
     * @param {string} name
     * @param {any} value
     */
    setItem(name, value) {
        if (!name) return null;
        if (!value) {
            window.localStorage.removeItem(name);
        } else {
            const v = typeof value === 'object' ? JSON.stringify(value) : value;

            window.sessionStorage.setItem(name, v);
        }
    },
    /**
     * // 操作sessionStorage
     * @param {string} name
     */
    getItem(name) {
        if (!name || typeof name !== 'string') return null;
        return window.sessionStorage.getItem(name);
    }
};
