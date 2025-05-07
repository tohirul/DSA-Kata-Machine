export default function two_crystal_balls(breaks: boolean[]): number {
    // find the sqrt
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    // jump equal to the sqrt untill ball one breaks
    let i;
    for (i = jumpAmount; i < breaks.length; i += jumpAmount)
        // check if ball breaks at each jumping point
        if (breaks[i]) break;

    // if ball breaks return back to the previous sqrt where the ball did not break
    i -= jumpAmount;

    // search for breaking point folliwng linear algoithm
    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++)
        // if breaks return the index
        if (breaks[i]) return i;
    // return -1 if not found
    return -1;
}
