function receivesAFunction(xy) {
    return xy();
}

function returnsANamedFunction() {
    return function returnedFunction(){

    };
}
function returnsAnAnonymousFunction() {
    return (function(){});
}