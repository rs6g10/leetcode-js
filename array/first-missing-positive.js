var firstMissingPositive = function(nums) {
  if(!nums && nums.length == 0) return 1;
      
  let n = nums.length;
  let numCheck = [];

  for(let i = 0; i < n; i++)
  {
      if(nums[i] > 0 && nums[i] < n+1) { 
          numCheck[nums[i]] = true;
      }
  }
  
  for(let i = 1; i < n+1; i++)
  {        
      if(!numCheck[i]) return i;
  }
  return n+1;
};