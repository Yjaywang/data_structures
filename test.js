var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  //edge case
  if (nums[0] > 0 || nums[nums.length - 1] < 0) {
    return res;
  }

  for (let i = 0; i < nums.length; i++) {
    let right = nums.length - 1;
    let left = i + 1;

    //check duplicated element
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (right > left) {
      const sum3 = nums[i] + nums[left] + nums[right];

      if (sum3 > 0) {
        right -= 1;
      } else if (sum3 < 0) {
        left += 1;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        //check like this[-2, -2, 0, 2, 2]
        while (nums[left] === nums[left + 1] && right > left) {
          left += 1;
        }
        left++;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 0]));
