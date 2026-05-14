const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {

  n = Number(n);

  let result = [];
  let temp = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

    // If adding current element stays within limit
    if (sum + arr[i] <= n) {
      temp.push(arr[i]);
      sum += arr[i];
    } 
    else {
      // Store current chunk
      result.push(temp);

      // Start new chunk
      temp = [arr[i]];
      sum = arr[i];
    }
  }

  // Push last chunk
  if (temp.length > 0) {
    result.push(temp);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));