//https://leetcode.com/problems/median-of-two-sorted-arrays/description/

var longestPalindrome = function(s) {
    var s_array = s.split('');
    var map = {};
    var cur_len = 0;
    var max_len = 0;
    var start_cursor = 0;

    for(let i=0;i<s_array.length;i++){
        if(map[s_array[i]] !== undefined){
            // cur_len++;
            // map[s_array[i]] = i;
            cur_len = i-map[s_array[i]]+1;
            if(cur_len>max_len){
                max_len = cur_len;
                i = map[s_array[i]];
                start_cursor = i;
                map = {};
            }
        }else{
            map[s_array[i]] = i;
        }
    }

    console.log(max_len);
    if(max_len>0){
        return s_array.slice(start_cursor,start_cursor+max_len).join('');
    }else{
        return s_array[0];
    }
};


// s = "babad";
// s = "cbbd";
s = "a";

// s_a = s.split('');
// console.log(s_a.slice(1,4));
// console.log(s_a.join(''));

console.log(longestPalindrome(s));

// nums1.splice(1,0,[4,5,6]);
// console.log(nums1);