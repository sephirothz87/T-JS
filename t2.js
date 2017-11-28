

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var addTwoNumbers = function(l1,l2) {

}



var a1 = [2,3,4];

var a2 = [5,6,4];


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
    for (i=array.length;i>=0;i--) {
        var tm_ln = new ListNode();

        tm_ln.val = array[i];
        tm_ln.next = ret;

        ret = tm_ln;
    }
    return ret
}

l1 = getListNode(a1);
l2 = getListNode(a2);

console.log(l1);
console.log(l2);


addTwoNumbers(l1,l2);








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