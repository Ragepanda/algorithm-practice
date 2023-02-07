let data = [2,8,1,5,3,4,2];

const swap = (array, indexOne, indexTwo) => {
    let temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
}

const bubbleSortDescending = (data) => {
    const maxIndex = data.length -1;
    let sortData = [...data];
    let swapped = false;

    for(var baseIndex = 0; baseIndex < maxIndex; baseIndex++){
        swapped = false;
        for (var secondaryIndex = baseIndex; secondaryIndex < maxIndex; secondaryIndex++ ){
            if(sortData[secondaryIndex] < sortData[secondaryIndex+1]){
                swap(sortData, secondaryIndex, secondaryIndex + 1);
                swapped = true;
            }
            if(swapped === false)
                break;
        }
    }
    return sortData;
}

const bubbleSortAscending = (data) => {
    const maxIndex = data.length -1;
    let sortData = [...data];
    let swapped = false;

    for(var baseIndex = 0; baseIndex < maxIndex; baseIndex++){
        swapped = false;
        for (var secondaryIndex = 0; secondaryIndex < maxIndex - baseIndex; secondaryIndex++ ){
            if(sortData[secondaryIndex] > sortData[secondaryIndex+1]){
                swap(sortData, secondaryIndex, secondaryIndex + 1);
                swapped = true;
            }
            if(swapped = false)
                break;
        }
    }
    return sortData;
}

console.log(bubbleSortDescending(data));
console.log(bubbleSortAscending(data));