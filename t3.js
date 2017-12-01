//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/



//2017-12-01-111246
//上一个版本，效率极差，重做
//思路，用一个对象存每一个值最后一次出现的位置，然后计算出遍历整个字符串后的最大值
//这个方案怀疑是map没有初始化，查询起来会非常耗时，改进思路是把这个map反过来，用位置表示字母
//用位置表示字母的方式不可取，而是用字符的ascii码当做key来用
var lengthOfLongestSubstring = function(s) {
    let map = Array(256).fill(-1) ,cur = 0, len = 0;
    for(let i=0;i<s.length;i++){
        let at = s[i].charCodeAt();
        let map_at = map[at];
        if(map_at !== -1){cur = map_at>cur?map_at:cur;}
        let tm_len = i-cur+1;
        len = len>tm_len?len:tm_len;
        map[at] = i+1;
    }
    return len;
};

var a = "abcabcbb";
// var a = "bbbbb";
// var a = "pwwkew";
// var a = "c";
// var a = "";
// var a = "abcddcba";

console.log(lengthOfLongestSubstring(a));
// console.log(a[5].charCodeAt());
//2017-12-01-111246


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

