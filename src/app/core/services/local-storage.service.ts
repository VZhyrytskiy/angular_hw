export class LocalStorageService {
  localStorage = window.localStorage;
  setItem(property: string, value: string) {
    this.localStorage.setItem(property, value);
  }
  getItem(value: string) {
    return this.localStorage.getItem(value);
  }
  removeItem(value: string) {
    this.localStorage.removeItem(value);
  }
  clear() {
    this.localStorage.clear();
  }
}

export const localStorageInstance = new LocalStorageService();
