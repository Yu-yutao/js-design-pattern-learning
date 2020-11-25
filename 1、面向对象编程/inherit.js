// 类式继承
function SuperClass(){
    this.superValue = true;
}

SuperClass.prototype.getSuperValue= function(){
    return this.superValue;
}

function SubClass(){
    this.subValue = false;
}

SubClass.prototype = new SuperClass();

SubClass.prototype.getSubValue = function(){
    return this.subValue;
}

var subItem = new SubClass();

console.log(subItem.superValue);