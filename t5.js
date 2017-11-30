//https://leetcode.com/problems/median-of-two-sorted-arrays/description/

var longestPalindrome = function(s) {
    let start = 0, end=0, len=s.length;

    let len_t = 0;
    for(let i=0;i<len;i++){
        let len1 = fromMid(s,i,i);
        let len2 = fromMid(s,i,i+1);

        if(len1==1&&len2==0){
            continue;
        }

        len_t = Math.max(len1,len2);
        if(len_t>end-start){
            start = i-Math.ceil(len_t/2-1)
            end = start + len_t;
        }
    }

    if(len_t == 0){
        return s[0];
    }
    return s.substring(start,end);
};

var fromMid = (s,left,right)=>{
    while(left>=0 && right<s.length && s[left]==s[right]){
        left--;
        right++;
    }
    return right-left-1;
};


// s = "babad";
s = "cbbd";
// s = "a";

// s_a = s.split('');
// console.log(s_a.slice(1,4));
// console.log(s_a.join(''));

console.log(longestPalindrome(s));

// nums1.splice(1,0,[4,5,6]);
// console.log(nums1);