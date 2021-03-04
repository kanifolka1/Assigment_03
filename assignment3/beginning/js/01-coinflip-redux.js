var coinFlip;
var count = prompt('Number of flips');

for (var i = 0; i < count; i++)
{
    var coinFlip = Math.round(Math.random());;
    if( coinFlip == 0)
    {
        console.log("Heads");
    }
    else if( coinFlip == 1)
    {
        console.log("Tails");
    }
}