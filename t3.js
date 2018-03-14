//移除数组中的指定值，不能使用额外的数组，复杂度O1


// var removeElement = function(nums, val) {
// 	for(let i=0;i<nums.length;i++){
// 		if(nums[i] === val){
// 			nums.splice(i--,1);
// 		}
// 	}
// };

//更好的解
//感觉splice的效率很低，不要用splice了
var removeElement = function(nums, val) {
	let j = 0
	for(let i=0;i<nums.length;i++){
		if(nums[i]!==val){
			nums[j++]=nums[i];
		}
	}
	nums.length=j;
};



// a1 = [3,2,2,3];
a1 = [1,1,2,3,4,4,4,5,6,7,7,8,8,9,10];

removeElement(a1,3);
console.log(a1);