//https://leetcode.com/problems/median-of-two-sorted-arrays/description/

var findMedianSortedArrays = function(nums1, nums2) {
    // var slice_point = 0;
    //
    // for(i=0;i<nums2.length;i++) {
    //     for(j=0;j<nums1.length;j++){
    //         if(nums2[i]<nums1[j]) {
    //             nums1.splice[1,0,nums2[i]]
    //         }
    //     }
    // }

    var cursor_1 = 0;
    var cursor_2 = 0;
    var ret = [];

    while(cursor_1<nums1.length||cursor_2<nums2.length){

        if(nums1[cursor_1]==undefined) {
            ret.push(nums2[cursor_2]);
            cursor_2++;
            continue;
        }

        if(nums2[cursor_2]==undefined) {
            ret.push(nums1[cursor_1]);
            cursor_1++;
            continue;
        }



        if(nums1[cursor_1]<nums2[cursor_2]){
            ret.push(nums1[cursor_1]);
            cursor_1 ++;
        }else{
            ret.push(nums2[cursor_2]);
            cursor_2 ++;
        }
    }

    console.log(ret);

    if(ret.length%2==0){
        return (ret[parseInt(ret.length/2)-1]+ret[parseInt(ret.length/2)])/2
    }else{
        return ret[parseInt((ret.length-1))/2];
    }
};


nums1 = [1, 3];
nums2 = [2];
// nums1 = [1, 2]
// nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1,nums2));


// nums1.splice(1,0,[4,5,6]);
// console.log(nums1);