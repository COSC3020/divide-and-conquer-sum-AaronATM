
function divideAndConquerSum(a) 
{
    var temp = [];
    if (a.length < 1)
    {
        return temp;
    }

    sumHelper(a, 0, a.length - 1, temp);
    return a;
}

function sumHelper(a, low, high, temp)
{
    var oneThird = Math.floor((high + low) / 3);
    var twoThird = Math.floor (2*(high + low) / 3) + 1;
    if (high === 1)
    {
        return;
    }

    sumHelper(a, low, oneThird, temp);
    sumHelper(a, oneThird, twoThird, temp);
    sumHelper(a, twoThird, high, temp);
    mergeSum(a, low, high, temp);
}


function mergeSum(a, low, high, temp)
{
    var b = low;
    for (var i = low + 1; i <= high; i++)
    {
        a[b] = a[b] + a[i];
        a.splice(i, 1);
    }
}

var input = [1, 5, -1, 4, 6, 7, 8, 9, 5];

console.log(divideAndConquerSum(input));