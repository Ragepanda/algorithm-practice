const data = [2,5,6,9,10,12,15,19,22,31,33,40];

const BinarySearch = (data, value , startIndex, endIndex) => {

    const middleIndex = Math.floor((endIndex - startIndex) / 2 + startIndex);

    if(data[middleIndex] === value)
        return true;

    if(startIndex === endIndex)
        return false;    
        
    if(value > data[middleIndex])
        return BinarySearch(data, value, middleIndex + 1, endIndex);

    if(value < data[middleIndex])
        return BinarySearch(data, value, startIndex, middleIndex - 1);
}

console.log(BinarySearch(data, 40, 0, data.length-1));