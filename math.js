function mean(nums) {
    let sum = 0;
    // console.log(nums);
    nums.forEach( (val) => {
        sum += Number(val);
    })
    // console.log(sum,'sum')
    // console.log('in mean func',sum/nums.length)
    return sum/nums.length
}

function mode(nums) {
    let numsArr = nums.map(Number);
    let numSet = new Set(numsArr);
    let mode;
    let maxCount = 0;
    numSet.forEach( (val1) => {
        let count = 0;

        numsArr.forEach( (val2) => {
            if (val1 === val2) {
                count += 1;
            }
        })
        if (count > maxCount) {
            mode = val1;
            maxCount = count;
        }
    })
    return mode
}

function median(nums) {
    let numsArr = nums.map(Number);
    let med;
    numsArr.sort((a, b) => a - b);
    switch (numsArr.length % 2) {
        case 0:
            med = (numsArr[numsArr.length/2 - 1] + numsArr[numsArr.length/2]) / 2;
            break;
        case 1:
            med = numsArr[parseInt(numsArr.length/2 - .5)];
            break;    
    }
    return med

}

module.exports = { mean, mode, median }