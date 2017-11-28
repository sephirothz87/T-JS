//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
//最终版
var lengthOfLongestSubstring = function(s) {
    var array = s.split("");
    if(array.length==1){
        return 1;
    }

    var max_length = 0;
    var cur_length = 0;

    var map = {};

    for (i=0;i<array.length;i++) {
        if(map[array[i]] == undefined) {
            map[array[i]] = i;
            cur_length++;
        }else{
            if(cur_length>max_length){
                max_length = cur_length;
            }
            cur_length = 0;
            i = map[array[i]];
            map = {}
        }
    }

    if(cur_length>max_length){
        return cur_length;
    }

    return max_length;
};
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


// var a = "abcabcbb";
// var a = "bbbbb";
var a = "pwwkew";

a_a = a.split("");

console.log(a_a);



console.log(lengthOfLongestSubstring(a));