import { Node } from '../utils/Node';
import { defaultEquals } from '../utils/Utils';

export default class LinkedList<T> {
	private count = 0;
	private head: Node<T> | undefined = undefined;

	constructor(private equalsFn = defaultEquals) {}

	push(element: T) {
		const node = new Node(element);
		let current: Node<T>;

		if (!this.head) {
			this.head = node;
			return;
		}

		current = this.head;

		while (current.next != null) {
			current = current.next;
		}

		current.next = node;
		this.count++;
	}

	getElementAt(index: number) {
		if (index >= 0 && index <= this.count) {
			let node = this.head;

			for (let i = 0; i < index && index != null; i++) {
				node = node?.next;
			}

			return node;
		}

		return undefined;
	}

	removeAt(index: number) {
		if (index >= 0 && index < this.count) {
			let current = this.head;

			if (index === 0) {
				this.head = current?.next;
			} else {
				let previous = this.getElementAt(index - 1);
				current = previous?.next;
				previous!.next = current?.next;
			}

			this.count--;
			return current?.value;
		}

		return undefined;
	}

	insertAt(element: T, index: number) {
		if (index >= 0 && index <= this.count) {
			const node = new Node(element);

			if (index === 0) {
				const current = this.head;
				node.next = current;
				this.head = node;
			} else {
				const previous = this.getElementAt(index - 1);
				const current = previous?.next;
				node.next = current;
				previous!.next = node;
			}

			this.count++;
			return true;
		}

		return false;
	}

	indexOf(value: T) {
		let current = this.head;

		for (let i = 0; i < this.count && current != null; i++) {
			if (this.equalsFn(value, current.value)) return i;
			current = current.next;
		}

		return -1;
	}

	remove(element: T) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}

	size() {
		return this.count;
	}

	isEmpty() {
		return this.size() === 0;
	}

	getHead() {
		return this.head;
	}

	toString() {
		if (this.head == null) {
			return '';
		}

		let objString = `${this.head.value}`;
		let current = this.head.next;

		for (let i = 0; i < this.size() && current != null; i++) {
			objString = `${objString} -> ${current.value}`;
			current = current.next;
		}

		return objString;
	}
}
