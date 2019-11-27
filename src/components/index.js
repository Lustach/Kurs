
export class Queue {
    constructor(){
        this.queue = new LinkedList()
    }
    enqueue(){
        return this.queue.add(element)
    }
    dequeue(){
        return this.queue.size_of_list()
        return this.queue.removeFrom(this.queue.size)
    }
    front(){
        if(this.queue.size_of_list()!==0) 
            return this.queue.head
        else{
            console.log('16')
        }
    }
    // isEmpty(){
    //     this.
    // }
    // printQueue(){

    // }
    getSize(){
        return this.queue.size_of_list()
    }
    getElement(value){
        return this.queue.indexOf(value)
    }
    sort(){//????????????????
        return this.queue = this.queue.mergeSort(this.queue)
    }
}
// User defined class node 
export class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
}
export class LinkedList{
    constructor() { 
        this.head = null; 
        this.size = 0;
        this.tail = null; 
    }
    // adds an element at the end 
// of list 
    add(element){
        // creates a new node 
        let node = new Node(element); 
        // to store current node 
        let current; 
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null){
            this.head = node;
            this.tail = this.head;
        }
        else { 
            current = this.head; 
            // iterate to the end of the 
            // list 
            while (current.next) { 
                current = current.next; 
            } 
            // add node 
            current.next = node;
            this.tail=current.next;
        } 
        this.size++; 
    } 
    removeFrom(index) 
    { 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        let curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
  
        // deleting first element """"""index===0?
        if (index == 0) { 
            this.head = curr.next; 
        } else { 
            // iterate over the list to the 
            // position to removce an element 
            while (it < index) {
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
            // remove the element 
            prev.next = curr.next; 
        } 
        this.size--; 
  
        // return the remove element 
        return curr.element; 
    } 
} 
    removeElement(element) 
    { 
        let current = this.head; 
        let prev = null; 
    
        // iterate over the list 
        while (current != null) { 
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element == element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.element; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    }
    // finds the index of element 
    indexOf(element) 
        { 
            let count = 0; 
            let current = this.head; 
        
            // iterae over the list 
            while (current != null) { 
                // compare each element of the list 
                // with given element 
                if (current.element == element) 
                    return count; 
                count++; 
                current = current.next; 
            } 
        
            // not found 
            return -1; 
        }
    // checks the list for empty 
        isEmpty() 
        { 
            return this.size == 0; 
        }
        size_of_list() 
        { 
            console.log(this.size);
            return this.size
        }
        printList() 
        { 
            let curr = this.head; 
            let str = ""; 
            while (curr) { 
                str += curr.element + " "; 
                curr = curr.next; 
            } 
            console.log(str); 
        }
        mergeSort = function(list) { 
  
            if (list.next === null) 
                return list; 
    
            let count = 0; 
            let countList = list 
            let leftPart = list; 
            let leftPointer = list; 
            let rightPart = null; 
            let rightPointer = null; 
    
            // Counting the nodes in the received linkedlist 
            while (countList.next !== null) { 
                count++; 
                countList = countList.next; 
            } 
    
            // counting the mid of the linked list 
            let mid = Math.floor(count / 2) 
            let count2 = 0; 
    
            // separating the left and right part with 
            // respect to mid node in tke linked list 
            while (count2 < mid) { 
                count2++; 
                leftPointer = leftPointer.next; 
            } 
    
            rightPart = new LinkedList(leftPointer.next); 
            leftPointer.next = null; 
    
            // Here are two linked list which 
            // contains the left most nodes and right 
            // most nodes of the mid node 
            return this._mergeSort(this.mergeSort(leftPart), 
                                   this.mergeSort(rightPart.head)) 
    }
    _mergeSort = function(left, right) { 
    
        // Create a new empty linked list 
        let result = new LinkedList() 

        let resultPointer = result.head; 
        let pointerLeft = left; 
        let pointerRight = right; 

        
        // If true then add left most node value in result, 
        // increment left pointer else do the same in 
        // right linked list. 
        // This loop will be executed until pointer's of 
        // a left node or right node reached null 
        while (pointerLeft && pointerRight) { 
            let tempNode = null; 

        // Check if the right node's value is greater than 
        // left node's value 
            if (pointerLeft.node > pointerRight.node) { 
                tempNode = pointerRight.node 
                pointerRight = pointerRight.next; 
            } 
            else { 
                tempNode = pointerLeft.node 
                pointerLeft = pointerLeft.next; 
            } 

            if (result.head == null) { 
                result.head = new Node(tempNode) 
                resultPointer = result.head 
            } 
            else { 
                resultPointer.next = new Node(tempNode) 
                resultPointer = resultPointer.next 
            } 
        } 

        // Add the remaining elements in the last of resultant 
        // linked list 
        resultPointer.next = pointerLeft; 
        while (resultPointer.next) 
            resultPointer = resultPointer.next 

            resultPointer.next = pointerRight 

        // Result is  the new sorted linked list 
        return result.head; 
    } 
}