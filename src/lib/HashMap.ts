import LinkedList from './LinkedList';

export default class HashMap<T> {
	private list: LinkedList<{ key: string; value: T }>[] = [];
	constructor(private size = 100) {}

	private hash(key: string) {
		let hash = 0;
		let chr: number;
		if (key.length === 0) return hash;

		for (let i = 0, len = key.length; i < len; i++) {
			chr = key.charCodeAt(i);
			hash = (hash << 5) - hash + chr;
			hash |= 0;
		}
		return Math.abs(hash % this.size);
	}

	private iterateInList(key: string, hash: number) {
		if (!this.list[hash]) return undefined;

		let actual = this.list[hash].getHead();

		while (actual?.value.key !== key && actual?.value.value != null) {
			actual = actual?.next;
		}

		return actual;
	}

	insert(key: string, value: T) {
		const index = this.hash(key);

		if (!this.list[index]) {
			this.list[index] = new LinkedList();
		}

		const findEquals = this.iterateInList(key, index);

		if (!findEquals) {
			this.list[index].push({ key, value });
		}
	}

	get(key: string): number | T {
		const hash = this.hash(key);

		if (!this.list[hash]) return -1;

		let actual = this.iterateInList(key, hash);

		return actual ? actual!.value.value : -1;
	}

	remove(key: string): T | number {
		const hash = this.hash(key);
		if (!this.list[hash]) return -1;

		const list = this.list[hash];
		const element = this.iterateInList(key, hash);
		const output = list.remove(element!.value);

		return output!.value;
	}
}
