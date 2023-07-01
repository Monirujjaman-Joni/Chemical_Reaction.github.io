function aldehydeMaking(a) {
    if (a > 2) {
        var aldehydeMaking_step = `C<sub>${a}</sub>H<sub>${2 * a + 1}</sub>OH + [O] &#10230;   C<sub>${a-1}</sub>H<sub>${2 * (a-1) + 1}</sub>CHO + H<sub>2</sub>O<span style="margin-left:40px">[ K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> , H<sub>2</sub>SO<sub>4</sub> ]</span><br>`;
        return aldehydeMaking_step;
    } 
    else {
        var aldehydeMaking_step = `C<sub>${a}</sub>H<sub>${2 * a + 1}</sub>OH + [O] &#10230;   CH<sub>${2 * (a-1) + 1}</sub>CHO + H<sub>2</sub>O<br> <span style="margin-left:40px">[ K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> , H<sub>2</sub>SO<sub>4</sub> ]</span><br>`;
    return aldehydeMaking_step;
    }
    
}