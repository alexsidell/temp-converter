let fTemp = document.getElementById("inputF")
let cTemp = document.getElementById("inputC")
let feelsObj = document.getElementById("feels")
console.log(fTemp.value)


cTemp.value = ((fTemp.value-32)*5/9)

let cValue = cTemp.value
if (cValue>30) { feelsObj.value = "It's HOT!"}
else if (cValue<0) {feelsObj.value = "It's COLD"}
else {feelsObj.value = "This temperature is ok"}