/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // since nodes are accessed through references
    // create a set that stores all the seen node references
    // if a node is seen a second time, return that node
    const setOfNodeReferences = new Set()
    let currNode = head
    while (currNode){
        if (setOfNodeReferences.has(currNode)){
            return currNode
        }
        else{
            setOfNodeReferences.add(currNode)    
        }
        currNode = currNode.next
    }
    return null //control reaches here only if a currNode.next === null is reached
};