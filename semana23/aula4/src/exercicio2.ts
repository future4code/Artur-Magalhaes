import { List, ListNode } from "./exercicio1";

class Stack {

    public list: List = new List()

    public isEmpty() {
        if(this.list.getListData().length === 0){
            return true
        }
        return false
    }

    public push(element: any) {
        this.list.insertElement(element);
    }
    
    public pop() {
        const del = this.list.getListData().length - 2;
        this.list.getListData()[del].next = null
        this.list.getListData().pop()
    }

    public printStack() {
        this.list.getList()
    }

}

const stack = new Stack();

//console.log(stack.isEmpty())

const firstElement = new ListNode(13);
const secondElement = new ListNode(14);
const thirdElement = new ListNode(15);

stack.push(firstElement)
stack.push(secondElement);
stack.push(thirdElement);

stack.pop();
//stack.printStack();