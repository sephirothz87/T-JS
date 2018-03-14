//移除已排序数组中的重复值

function removeDu(nums){
    let number = [];

    for (let i=0;i<nums.length;i++){
        let v = nums[i];
        while(nums[i+1] === v){
            i++;
        }
        number.push(nums[i]);
    }

    return number;
}

a1 = [1,1,2];
// a1 = [1,1,2,3,4,4,4,5,6,7,7,8,8,9,10];

console.log(removeDu(a1));