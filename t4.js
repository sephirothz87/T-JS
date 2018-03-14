//在字符串中找到最长的合法括号组合

route = [];
cursor = -1;

var longestValidParentheses = function(s) {

	for(let i=0;i<s.length;i++){
		if(s.charAt(i) == '('){
			cursor++;

			if(!route[cursor]){
				route.push(0);
			}
		} else if(s.charAt(i) == ')'){
			if(cursor>0){
				cursor--;
				// if(route[cursor]){
					route[cursor]++;
				// }else{
				// 	route.push(1);
				// }
			}
		} else {
			return 'error char'
		}
	}

	console.log(route);
	route.sort((a,b)=>{return b-a});
	console.log(route);

	let max = 0,len = 0;
	for(let i=0;i<route.length;i++){
		if(route[i]>0){
			len+=route[i]
		}else{
			max = Math.max(max,len);
			len = 0;
		}
	}

	return max*2;
};

s1 = '(()';
s1 = '())';
s1 = ')()())';
s1 = "()(()";
s1 = "()()"
s1 = "(()()";
// s1 = '()';
s1 = ")(((((()())()()))()(()))(";
s1 = "(()()(())((";
s1 = "(()(((()";

console.log(longestValidParentheses(s1));