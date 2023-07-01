function decarbo(a) {
    if (a > 2) {
        var preDecarboStep = `C<sub>${a-1}</sub>H<sub>${2 * (a-1) + 1}</sub>COOH + NaOH &#10230; C<sub>${a-1}</sub>H<sub>${2 * (a-1) + 1}</sub>COONa + H<sub>2</sub>O<br>`
        var decarboStep = `C<sub>${a-1}</sub>H<sub>${2 * (a-1) + 1}</sub>COONa + NaOH(CaO) &#10230; Na<sub>2</sub>CO<sub>3</sub> + C<sub>${a - 1}</sub>H<sub>${2 * (a - 1) + 2}</sub>`;
    } 
    else {
        var preDecarboStep = `CH<sub>${2 * (a-1) + 1}</sub>COOH + NaOH &#10230; CH<sub>${2 * (a-1) + 1}</sub>COONa + H<sub>2</sub>O<br>`
    var decarboStep = `CH<sub>${2 * (a-1) + 1}</sub>COONa + NaOH(CaO) &#10230; Na<sub>2</sub>CO<sub>3</sub> + CH<sub>${2 * (a - 1) + 2}</sub>`;
    }
    var main_step = uvReactionAlkane(a)+ alchoholMaking(a) +aldehydeMaking(a)+ acidMaking(a) + preDecarboStep + decarboStep ;
    return main_step;
}

