
function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function divide(nums1, nums2){
    if(nums2 === 0){
        throw new Error('division by 0 is not possible');
    }
    return nums1/nums2
}

module.exports = {
    add, subtract, divide
};
