const map = new Map()
var canJump = function(nums) {
    if(map.has(nums.length)) return map.get(nums.length)
    if(nums.length <= 1) return true;
    console.log(nums)
    if(nums[0] === 0 && nums.length > 1) return false;
    
    const steps = nums[0];
    let result = false;
    
    for(let i = 1; i <= steps; i++){
        if(!result) result = canJump(nums.slice(i))
    }
    
    map.set(nums.length,result)
    return result
};


r = canJump([3,2,1,0,4])