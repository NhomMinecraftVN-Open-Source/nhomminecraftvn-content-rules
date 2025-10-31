export default class Storage {
	static insert(key, data) {
		return localStorage.setItem(key, data);
	}

	static query(key) {
		return localStorage.getItem(key);
	}

	static delete(key) {
		return localStorage.removeItem(key);
	}
}
