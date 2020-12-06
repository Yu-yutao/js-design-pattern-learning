/**
 * 原型继承
 */

function prototypeExtend(){
    var F = function(){},
    args = arguments,
    i = 0,
    len = arguments.length;

    for(; i < len; i++){
        for(var j in args[i]){
            F.prototype[j] = args[i][j];
        }
    }

    return new F();
}