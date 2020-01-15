function showLaunch() {
    var dt = complexLogic(function (dtValue) {
        console.log('Launch data' + dtValue);
    }); //callback function
}
function complexLogic(ref) {
    //main logic
    //prepares and returns data
    return '12/30/2022';
    //ref('12/30/2022');
}
showLaunch();
