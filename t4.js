//在字符串中找到最长的合法括号组合
var longestValidParentheses = function(s) {
    let cl = 0,
    	cr = 0,
    	// cursor = -1,
    	max = 0,
    	stackL = [];
    	len = 0;

	for(let i=0;i<s.length;i++){
		if(s.charAt(i) == '('){
			cl++;
			// stackL.push(i);
			// if (cursor == -1){
			// 	cursor = i
			// }

		} else if(s.charAt(i) == ')') {
			if(cl == 0){
				continue;
			}
			// if(stackL.length == 0 && len>0){
			// 	if(len>max){
			// 		max = len;
			// 		len = 0;
			// 	}
			// 	continue;
			// }

			cr++;

			// if(cr>cl){

			// }else if(cr==cl){


			// }

			// if(stackL.length>0){
			// 	let len = i - stackL.pop()
			// 	// if(stackL.length == 0 && len > max){
			// 	if(len > max){
			// 		max = len
			// 	}
			// }



			if(cr>cl){
				if(len>max){
					max = len
					len = 0
				}
				cl = 0;
				cr = 0;
			}else{
				len+=2;
			}




			// if(cr<cl){
			// 	len+=2;
			// 	if(i==s.length-1 && len>max){
			// 		max = len;
			// 	}
			// }else if(cr>cl){

			// }

			if(s.length-1 == i && len >max){
				max = len
			}

		} else {
			return 'error char'
		}
	}

	return max
};



// s1 = '(()';
// s1 = '())';
// s1 = ')()())';
s1 = "()(()";

console.log(longestValidParentheses(s1));