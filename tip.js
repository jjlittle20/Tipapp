function getExpeience() {
  visitExperience = document.getElementById("visitExp").value;
  var multiplier = 0;

  if (visitExperience === "Great") {
    multiplier = 1.15;
    console.log("great");
    return multiplier;
  } else if (visitExperience === "Good") {
    multiplier = 1.1;
    console.log("good");
    return multiplier;
  } else if (visitExperience === "Ok");
  {
    multiplier = 1.05;
    console.log("ok");
    return multiplier;
  }
}
function tipping() {
  multi = getExpeience();
  billTotal = document.getElementById("total-bill").value;
  tipBillTotal = billTotal * multi;
  tip = tipBillTotal - billTotal;
  document.getElementById("billtotal-total").innerHTML = billTotal;
  document.getElementById("tip-only").innerHTML = tip.toFixed(2);
  document.getElementById("tipandtotal").innerHTML = tipBillTotal.toFixed(2);
}
