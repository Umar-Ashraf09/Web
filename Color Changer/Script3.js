
function changeColor() {

    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);

    var hex_r = r.toString(16);
        if (hex_r.length < 2) {
            hex_r = "0" + hex_r;
        }

    var hex_g = g.toString(16);
        if (hex_g.length < 2) {
        hex_g = "0" + hex_g;
        }

    var hex_b = b.toString(16);
        if (hex_b.length < 2) {
        hex_b = "0" + hex_b;
        }

    document.getElementById('hex').innerHTML = "#" + hex_r + hex_g + hex_b;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    /*document.getElementById('hex').innerHTML = rgbTohex;*/
}


/*
function changeColor() {

    document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
*/