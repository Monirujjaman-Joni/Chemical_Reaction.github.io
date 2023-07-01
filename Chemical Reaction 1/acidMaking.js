function acidMaking(a) {
    if (a > 2) {
        var acidMaking_step = `C<sub>${a - 1}</sub>H<sub>${2 * (a - 1) + 1}</sub>CHO + [O] &#10230;   C<sub>${a - 1}</sub>H<sub>${2 * (a - 1) + 1}</sub>COOH <span style="margin-left:60px"> [ K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> , H<sub>2</sub>SO<sub>4</sub> ]</span><br>`;
        return acidMaking_step;
    } 
    else {
        var acidMaking_step = `CH<sub>${2 * (a - 1) + 1}</sub>CHO + [O] &#10230;   CH<sub>${2 * (a - 1) + 1}</sub>COOH<span style="margin-left:60px">[ K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> , H<sub>2</sub>SO<sub>4</sub> ]</span><br>`;
    return acidMaking_step;
    }
}
