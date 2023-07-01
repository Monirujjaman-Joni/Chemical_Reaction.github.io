function uvReactionAlkane(a) {
    if (a > 1) {
        var step1 = `C<sub>${a}</sub>H<sub>${2 * a + 2}</sub> + Cl<sub>2</sub>  &#10230; C<sub>${a}</sub>H<sub>${2 * a + 1}</sub>Cl + HCl <span style ="margin-left:80px">[ UV ]</span><br>`;
    
    }
    else {
        var step1 = `CH<sub>${2 * a + 2}</sub> + Cl<sub>2</sub>  &#10230; CH<sub>${2 * a + 1}</sub>Cl + HCl<span style ="margin-left:80px">[ UV ]</span><br>`;
    }
    return step1;
};

 