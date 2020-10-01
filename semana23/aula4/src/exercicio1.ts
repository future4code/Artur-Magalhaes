export class List {
    private start: ListNode | null = null
    private list: any[] = []

    public insertElement (element: ListNode) {
        if(this.list.length === 0){
            this.setStart(element)
        }
        if(this.list[this.list.length - 1] && this.list !== undefined){
            this.list[this.list.length - 1].next = element
        }
        this.list.push(element)
    }

    public getList() {
        console.log('start: ' + JSON.stringify(this.start))
        console.log(this.list)
    }

    public getListData = () => this.list

    public setStart = (element: ListNode) => this.start = element
}

export class ListNode{
    public next: ListNode | null = null
    constructor(
        public value: any
        ){value}
}

//const list: List = new List()
/*
const firstElement = new ListNode(13);
const secondElement = new ListNode(14);
const thirdElement = new ListNode(15);

list.start = firstElement

list.insertElement(firstElement);
list.insertElement(secondElement);
list.insertElement(thirdElement);
list.getList();*/