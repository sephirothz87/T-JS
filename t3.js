//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/




//效率极差，重做
//思路，用一个对象存每一个值最后一次出现的位置，然后计算出遍历整个字符串后的最大值
var lengthOfLongestSubstring = function(s) {
    let map={},cur=0,len=0;

    for(let i=0;i<s.length;i++){
        if(map[s[i]]){cur = Math.max(map[s[i]],cur);}
        len = Math.max(len,i-cur+1);
        map[s[i]] = i+1;
    }

    return len;
};

// var a = "abcabcbb";
// var a = "bbbbb";
// var a = "pwwkew";
// var a = "c";
var a = "";

console.log(lengthOfLongestSubstring(a));
//效率极差，重做

//最终版
// var lengthOfLongestSubstring = function(s) {
//     var array = s.split("");
//     if(array.length==1){
//         return 1;
//     }
//
//     var max_length = 0;
//     var cur_length = 0;
//
//     var map = {};
//
//     for (i=0;i<array.length;i++) {
//         if(map[array[i]] == undefined) {
//             map[array[i]] = i;
//             cur_length++;
//         }else{
//             if(cur_length>max_length){
//                 max_length = cur_length;
//             }
//             cur_length = 0;
//             i = map[array[i]];
//             map = {}
//         }
//     }
//
//     if(cur_length>max_length){
//         return cur_length;
//     }
//
//     return max_length;
// };
//最终版


// var lengthOfLongestSubstring = function(s) {
//
//     var start = 0;
//     var array = s.split("");
//     var max_length = 0;
//     var cur_length = 0;
//     var re_map = {};
//
//     for(var i=start;i<array.length;i++) {
//         if(re_map[array[i]]==undefined) {
//             re_map[array[i]] = i;
//             cur_length++;
//         }else if(cur_length>max_length){
//             max_length = cur_length;
//             cur_length = 0;
//             i = re_map[array[i]];
//             re_map = {};
//         }
//     }
//
//     return max_length;
// };

