//在字符串中找到最长的合法括号组合
var longestValidParentheses = function(s) {
    // let cl = 0,
    // 	cr = 0,
    // 	// cursor = -1,
    // 	max = 0,
    // 	stackL = [];
    // 	len = 0;
	let max = 0;
	let stackL = [];
    let len = 0;
    let tmpLen = 0;
    let lastLen = 0;
    let lastPop = 0;

	for(let i=0;i<s.length;i++){
		if(s.charAt(i) == '('){
			// cl++;
			stackL.push(i);
			// if (cursor == -1){
			// 	cursor = i
			// }
			// if(s.length-1 == i){
			// 	max = len;
			// }

		} else if(s.charAt(i) == ')') {
			// if(cl == 0){
			// 	continue;
			// }
			if(stackL.length == 0 && len>0){
				if(len>max){
					max = len;
					len = 0;
				}
				continue;
			}

			// cr++;

			// if(cr>cl){

			// }else if(cr==cl){


			// }

			if(stackL.length>0){
				// lastPop = stackL.pop();
				tmpLen = i - stackL.pop() +1
				if(stackL.length == 0){
					len+=tmpLen
				}

				// if(s.length-1 == i && tmp_len > max){
				// if(s.length-1 == i){
				// 	if(stackL.length>0){
				// 		lastlen = i - stackL[stackL.length-1];
				// 	}
				// 	max = Math.max(len,tmp_len,lastlen,max);
				// }
			}




			// if(cr>cl){
			// 	if(len>max){
			// 		max = len
			// 		len = 0
			// 	}
			// 	cl = 0;
			// 	cr = 0;
			// }else{
			// 	len+=2;
			// }




			// // if(cr<cl){
			// // 	len+=2;
			// // 	if(i==s.length-1 && len>max){
			// // 		max = len;
			// // 	}
			// // }else if(cr>cl){

			// // }

			// if(s.length-1 == i && len >max){
			// 	max = len
			// }

		} else {
			return 'error char'
		}

		if(s.length-1 == i){
			if(stackL.length>0){
				lastLen = i - stackL[stackL.length-1];
			}
			max = Math.max(len,tmpLen,lastLen,max);
		}
	}

	return max;
};



// s1 = '(()';
// s1 = '())';
// s1 = ')()())';
// s1 = "()(()";
// s1 = "()()"
// s1 = "(()()";
// s1 = '()';
// s1 = ")(((((()())()()))()(()))(";
s1 = "(()()(())((";

console.log(longestValidParentheses(s1));