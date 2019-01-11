var x=document.getElementById("giatri");
function exchange1() {
    return x.value/22000;
}
function exchange2(x) {
    return x.value*22000;
}
function myFunction() {
    var ketqua;
    var a = document.getElementById("chuyen").value;
    var b = document.getElementById("thanh").value;

    if (a == "VND" && b == "USD") {
        ketqua = exchange1(x);
    }
    if (a == "USD" && b == "VND") {
        ketqua = exchange2(x);
    }
    if (a == "VND" && b == "VND") {
        ketqua = x.value
    }
    if (a == "USD" && b == "USD") {
        ketqua = x.value``
    }
    var y=document.getElementById('sotien');
    y.innerHTML=("Result:"+" "+ketqua);
}
