import LinkedList from './lib/LinkedList';

const list = new LinkedList();

for (let i = 0; i < 50; i++) {
	list.push(Math.floor(Math.random() * 100));
}

console.log(list.toString());
console.log(list.getElementAt(4)?.value);
