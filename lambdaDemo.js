function showLaunch() {
    var dt = complexLogic(function (dtValue) { return console.log(dtValue); });
}
function complexLogic(ref) {
    //main logic
    //prepares and returns data
    //return '12/30/2022'; // will not display output
    ref('12/30/2022');
}
showLaunch();
