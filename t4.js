//在字符串中找到最长的合法括号组合
// var longestValidParentheses = function(s) {
// 	let max = 0;
// 	let stackL = [];
//     let len = 0;
//     let tmpLen = 0;
//     let lastLen = 0;
//     let lastPop = 0;

// 	for(let i=0;i<s.length;i++){
// 		if(s.charAt(i) == '('){
// 			stackL.push(i);
// 		} else if(s.charAt(i) == ')') {
// 			if(stackL.length == 0 && len>0){
// 				if(len>max){
// 					max = len;
// 					len = 0;
// 				}
// 				continue;
// 			}

// 			if(stackL.length>0){
// 				tmpLen = i - stackL.pop() +1
// 				max = Math.max(tmpLen,max);
// 				if(stackL.length == 0){
// 					len+=tmpLen;
// 					// max = Math.max(len,max);
// 				}
// 			}

// 		} else {
// 			return 'error char'
// 		}

// 		if(s.length-1 == i){
// 			if(stackL.length>0){
// 				lastLen = i - stackL[stackL.length-1];
// 			}
// 			max = Math.max(len,tmpLen,lastLen,max);
// 		}
// 	}

// 	return max;
// };



var longestValidParentheses = function(s) {
	let max = 0;
	let stackL = [];
    let cursorL = Infinity;
    let cursorR = 0;
    let wholeLeftCursor = Infinity;

	for(let i=0;i<s.length;i++){
		if(s.charAt(i) == '('){
			stackL.push(i);
		} else if(s.charAt(i) == ')') {
			if(stackL.length == 0){
				max = Math.max(max,cursorR - wholeLeftCursor + 1);
				cursorL = Infinity;
				wholeLeftCursor = Infinity;
			}

			if(stackL.length>0){
				lastPop = stackL.pop()
				cursorL = Math.min(lastPop,cursorL);
				cursorR = i;

				// max = Math.max(max,cursorR - cursorL + 1);

				if(stackL.length==0){
					wholeLeftCursor = Math.min(cursorL,wholeLeftCursor);
					cursorL = Infinity;
				}
			}

		} else {
			return 'error char'
		}

		if(s.length-1 == i){
			if(stackL.length>0){
				max = Math.max(max,cursorR - cursorL + 1);
			}
		}
	}

	return max;
};


// s1 = '(()';
// s1 = '())';
// s1 = ')()())';
s1 = "()(()";
// s1 = "()()"
// s1 = "(()()";
// s1 = '()';
// s1 = ")(((((()())()()))()(()))(";
// s1 = "(()()(())((";

console.log(longestValidParentheses(s1));