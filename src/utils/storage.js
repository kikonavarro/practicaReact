const storage = {
	get(key) {
		const value = localStorage.getItem(key);
		if (!value) {
			return null;
		}
		return JSON.parse(value);
	},

	set(key, value, saveValue) {
		if (saveValue===true) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	},

	remove(key) {
		localStorage.removeItem(key);
	},
};

export default storage;
