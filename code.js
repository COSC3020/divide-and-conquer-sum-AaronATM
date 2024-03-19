// worked with Jacob Johnson

function divideAndConquerSum(a)
{
    return sumHelper(a);
}

function sumHelper(a)
{
    var low = 0;
    var high = a.length;
    var oneThird = Math.floor(high / 3);
    var twoThird = Math.floor (2*(high) / 3);

    if (high <= 3)
    {
        var sum = 0;
        for (i = 0; i < high; i++)
        {
            sum = sum + a[i];
        }
        return sum;
    }

    return sumHelper(a.slice(low, oneThird)) + sumHelper(a.slice(oneThird, twoThird)) + sumHelper(a.slice(twoThird, high));
}