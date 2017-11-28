

//2017-11-28-231115    https://leetcode.com/problems/add-two-numbers/description/

function ListNode(val) {
    this.val = val;
    this.next = null;
}


//最终版
var addTwoNumbers = function(l1,l2) {
    var ret = new ListNode(0);
    var nx = ret;

    var plus = false;

    while(l1!=null || l2!=null || plus){

        if(l1==null&&l2==null){
            nx.val = 1;
            plus = false;
        } else {
            var sum = (l1!=null?l1.val:0) + (l2!=null?l2.val:0) + (plus?1:0);

            if(sum>=10){
                sum-=10;
                plus=true;
            }else{
                plus=false;
            }

            nx.val = sum;
        }


        if(l1!=null){l1=l1.next;}
        if(l2!=null){l2=l2.next;}

        if (l1!=null || l2!=null || plus){
            nx.next = new ListNode(0);
            nx = nx.next;
        }
    }

    return ret;
}
//最终版


// var addTwoNumbers = function(l1,l2) {
//     var ret = new ListNode(0);
//     ret.next = null;
//     var nt = ret;
//     var plus = false;
//
//     while(l1 !=null || l2 !=null || plus) {
//         // var sum = 0;
//
//         if(l1==null&&l2==null&&plus){
//             nt.val = 1;
//             plus = false;
//         } else {
//             var sum = (l1!=null?l1.val:0) + (l2!=null?l2.val:0) + (plus?1:0);
//
//             if(sum>=10){
//                 plus = true;
//                 sum -= 10;
//             } else {
//                 plus = false;
//             }
//
//             nt.val = sum;
//
//             if((l1!=null&&l1.next!=null) || (l2!=null&&l2.next!=null) || plus){
//                 nt.next = new ListNode(0);
//             }else{
//                 nt.next = null;
//             }
//
//             nt = nt.next;
//
//             if(l1!=null)l1=l1.next;
//             if(l2!=null)l2=l2.next;
//         }
//
//     }
//
//     return ret;
// }

// var addTwoNumbers = function(l1, l2) {
//     var plus = false;
//     var ret = [];
//     for(let i = 0; i<l1.length; i++) {
//         sum = l1[i] +l2[i] + (plus?1:0);
//         plus = false;
//         if(sum>=10){
//             ret.push(sum-10);
//             plus = true;
//         } else {
//             ret.push(sum);
//         }
//     }
//     return ret;
// };

// var a1 = [2,4,3];
//
// var a2 = [5,6,4];

// var a1 = [5];
//
// var a2 = [5];
// var a1 = [8,9];
//
// var a2 = [2];
var a1 = [1,8];

var a2 = [0];


var getListNode = (array) => {
    // var ret = new ListNode();
    // var next = ret.next;

    // for(i=0;i<array.length;i++) {
    //     ln.val = array[i]
    //     if (array[i+1]!=undefined) {
    //         ln.next = new getListNode()
    //     }
    // }

    // var tm_ln = new ListNode();
    var ret = null;
    for (i=array.length;i>0;i--) {
        var tm_ln = new ListNode();

        tm_ln.val = array[i-1];
        tm_ln.next = ret;

        ret = tm_ln;
    }
    return ret
}

l1 = getListNode(a1);
l2 = getListNode(a2);

// console.log(l1);
// console.log(l2);


// addTwoNumbers(l1,l2);
// console.log(addTwoNumbers(a1,a2));

console.log(addTwoNumbers(l1,l2));
//2017-11-28-231115    https://leetcode.com/problems/add-two-numbers/description/







//2017-11-28-164913
//#3
// var two_sum = (num,target)=>{
//     var map = {}
//
//     for(let i=0;i<num.length;i++){
//         var min = target - num[i];
//
//         if(map[min]!=undefined){
//             return [map[min],i];
//         }
//         map[num[i]] = i;
//     }
// }
//
// // console.log(two_sum([3,2,4],6));
// console.log(two_sum([5,4,3,2,1],5))
//2017-11-28-164913





//2017-11-28-161029
// var two_sum = (num,target)=>{
//     var map = {};
//     // for(let i in num){
//     for(let i=0;i<num.length;i++){
//         console.log(i)
//         // map.push({i:num[i]});
//         // map[num[i]] = parseInt(i);
//         map[num[i]] = i;
//         console.log(map)
//     }
//
//     for(let i=0;i<num.length;i++){
//         min = target - num[i]
//
//         if(map[min]!=undefined){
//             // return [i,parseInt(map[min])]
//             return [i,map[min]]
//         }
//     }
//
//
//     console.log(map);
//
//     console.log("no two sum");
// }
//
// // two_sum([1,2,3,4,5],9);
// // two_sum([5,4,3,2,1],3);
//
// // console.log(two_sum([5,4,3,2,1],5))
// console.log(two_sum([3,2,4],6));
//2017-11-28-161029


// #1
// var twoSum = function(nums, target) {
//     for (i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             if ((nums[i]+nums[j]) == target) {
//                 return [i,j]
//             }
//         }
//     }
// };