import HashMap from './lib/HashMap';

const map = new HashMap<number>();
map.insert('aaah', 22);
map.insert('Lol', 56);
map.insert('Dota', 72);
map.insert('WoW', 91);

console.log(map.get('aaah'));
console.log(map.get('Lol'));
console.log(map.get('Dota'));
console.log(map.get('WoW'));

map.remove('WoW');

console.log(map.get('WoW'));
