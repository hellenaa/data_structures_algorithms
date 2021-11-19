

class Node {
	constructor (value, next) {
		this.next = next;
		this.value = value;
	}
}
class List {
	constructor(value) {
		const newNode = new Node(value, null);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}

	add(value) {
		const newNode = new Node(value, null);
		if (this.lenght < 1) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
		}
		this.tail = newNode;
		this.length ++;
	}

	remove(value) {
		if (this.length === 0) return false;

		let node = this.head;
		let previusNode = this.head;

		while(node) {
			if (node.value === value) {
				if(previusNode === node) {
					this.head = node.next;
					if(this.length === 1) {
						this.tail = null;
					}
				} else {
					previusNode.next = node.next;
					if (node.next === null) {
						this.tail = previusNode;
					}
				}
				this.length --;
				return node;

			} else {
				if (node.next === null) return false;
				previusNode = node;
				node = node.next;
			}
		}

	}
	printList() {
		let list = this.head;
		while (list) {
			console.log(list.value);
			list = list.next;
		}
	}
}
const list = new List(4);
console.log("length", list.length)
list.add(5)
list.add(6)
list.add(7)
list.printList()
console.log("length", list.length)
console.log(list.tail)
console.log("removing")
console.log(list.remove(7))
// list.remove(6)
list.printList()
console.log("length", list.length)
console.log(list.tail)
