//https://leetcode.com/problems/median-of-two-sorted-arrays/description/

var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;
    var max_len = 0;
    var s_a = s.split('');
    // var ret = s_a[0];

    for(let i=0;i<s_a.length;i++){
        var len1 = fromMid(s_a,i,i);
        var len2 = fromMid(s_a,i,i+1);

        if(len1==1&&len2==0){
            continue;
        }

        var len = Math.max(len1,len2);

        if(len>max_len){
            max_len = len;
            if(len%2==0){
                start = i-(len-2)/2;
                end = i+len/2;
            }else{
                start = i-(len-1)/2;
                end = i+(len-1)/2;
            }
        }
    }
    if(max_len!=0){
        return s_a.slice(start,end+1).join('');
    }else{
        return s_a[0];
    }
};

var fromMid = (s_a,left,right)=>{
    while(s_a[left]!==undefined && s_a[right]!==undefined && s_a[left]==s_a[right]){
        left--;
        right++;
    }
    return right-left-1;
};


s = "babad";
s = "cbbd";
s = "a";

// s_a = s.split('');
// console.log(s_a.slice(1,4));
// console.log(s_a.join(''));

console.log(longestPalindrome(s));

// nums1.splice(1,0,[4,5,6]);
// console.log(nums1);