var x = document.querySelector("#div");
function main(p, q) {
    var n = p;
    var m = q;
    if ((n > m || n < m) && n > 0 && m > 0 && n!=m && n<51 && m<51) {
        var arr = [];
        console.log(n);
        console.log(m);
        function operate(a) {
            var y;
            if (a == n) {
    
                return m;
            }
    
    
            else if (a % 2 != 0 && a != n) {
                y = a + 1;
                console.log(y);
                arrayInput(`${decarbo(y)}<br>`);
                return operate(y);
    
            }
            else if (a % 2 == 0 && a != n && a > n) {
                y = a / 2;
                console.log(y);
                arrayInput(wurtzReaction(y) + "<br>");
                return operate(y);
            }
            else if (a % 2 == 0 && a != n && a < n) {
                y = a + 1;
                console.log(y);
                arrayInput(decarbo(y) + "<br>");
                return operate(y);
            }
            return arr;

        
        }
    
        console.log(operate(m));
        function arrayInput(i) {
            return arr.push(i);
        }
          
        console.log(arr.reverse());
        for (var j = 0; j < arr.length; j++) {
            x.innerHTML += arr[j] + "<br>";
        }
    }
    else {
        x.innerHTML = "Invalid input";
    }
    
}
