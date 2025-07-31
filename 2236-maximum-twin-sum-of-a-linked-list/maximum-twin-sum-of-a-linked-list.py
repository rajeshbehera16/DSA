# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def findMid(self, head):
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow

    def reverse(self, mid):
        prev = None
        temp = mid
        while temp:
            curr = temp.next
            temp.next = prev
            prev = temp
            temp = curr
        return prev


    def pairSum(self, head: Optional[ListNode]) -> int:
        
        mid = self.findMid(head)      
        mid = self.reverse(mid)         
        node1 = head                    
        node2 = mid                      
        sum1 = 0                        

        while node2:
            temp = node1.val + node2.val
            sum1 = max(sum1, temp)
            node1 = node1.next
            node2 = node2.next

        return sum1
            
