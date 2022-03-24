function calculate(){
    var x = parseInt (f1.hours.value);
    var y = parseInt(f1.rate.value);
    var z = parseInt(f1.tax.value);
    var Total = (x*y) + z;

    f1.total.value = Total;
}
function cal(){
    var t = parseInt(f2.totaltax.value);
    var s = parseInt(f2.subtotal.value);
    var totalAmount = t + s;

    f2.totalamount.value = totalAmount;
}