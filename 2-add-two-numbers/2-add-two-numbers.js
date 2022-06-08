/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //since numbers are given in reverse digit order
    // and since the expected sum output is also of the same form
    // we can traverse both linked lists and create the sum linked list simultaneously
    const lsum = new ListNode()
    //this points to the head and is to be returned
    let firstNodeUpdated=false
    let lsum_currNode = lsum 
    let l1_currNode = l1
    let l2_currNode = l2
    let carry = 0
    while (l1_currNode!==null || l2_currNode!==null || carry!==0){
        let l1_digit = l1_currNode?.val || 0 ;
        let l2_digit = l2_currNode?.val || 0 ;
        let sum = l1_digit + l2_digit + carry
        carry = Math.floor(sum/10)
        let newDigit = sum % 10
        
        if (!firstNodeUpdated){
            lsum_currNode.val = newDigit
            firstNodeUpdated=true
            
        }else{
            const newNode = new ListNode(newDigit)
            lsum_currNode.next = newNode
            lsum_currNode = lsum_currNode.next
           
        }
        //for next iteration:
        l1_currNode= l1_currNode===null? null : l1_currNode.next
        l2_currNode= l2_currNode===null? null : l2_currNode.next
    }
    return lsum
};