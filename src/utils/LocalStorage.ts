class LocalStorage {
    static set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value))
    }

    static get<T = any>(key: string): T | null {
        const item = localStorage.getItem(key);


        if (item) {
            return JSON.parse(item) as T;
        }

        return null;
    }

    static remove(key: string): boolean {
        localStorage.removeItem(key);
        return localStorage.getItem(key) ? false : true;
    }

    static removeAll(): void {
        return localStorage.clear()
    }
}


export { LocalStorage }