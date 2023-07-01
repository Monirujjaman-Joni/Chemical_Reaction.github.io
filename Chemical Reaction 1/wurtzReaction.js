function wurtzReaction(a) {
     
    if (a == 1)
    {
        let b = 2 * a;  
        const newLocal_1 = `2CH<sub>${2 * a + 1}</sub>Cl`;
        const newLocal_2 = `C<sub>${b}</sub>H<sub>${2 * b + 2}</sub>`;
        const newLocal_3 = `<span style="margin-left:40px">[ Dry Either ]</span>`;
        let step2 = `${newLocal_1} + 2Na  &#10230; 2NaCl + ${newLocal_2}  ${newLocal_3}`;
        
        return uvReactionAlkane(a) + step2 ;
    }
    else {
        let b = 2 * a;  
        const newLocal_1 = `2C<sub>${a}</sub>H<sub>${2 * a + 1}</sub>Cl`;
        const newLocal_2 = `C<sub>${b}</sub>H<sub>${2 * b + 2}</sub>`;
        const newLocal_3 = `<span style="margin-left:40px">[ Dry Either ]</span>`;
        let step2 = `${newLocal_1} + 2Na  &#10230; 2NaCl + ${newLocal_2}  ${newLocal_3}`  ;
        
        return  uvReactionAlkane(a) + step2 ;
    }
   
    
   
}
