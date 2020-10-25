// 通过class封装

var CheckObj = function(){
    this.errStore = []
}
CheckObj.prototype = {
    checkName(name){
        if(name.length < 3){
            this.errStore.push('用户名不应该小于3位')
        }
        return this
    },
    checkPassword(pwd){
        if(pwd.length < 6){
            this.errStore.push('密码不应该小于6位')
        }
        return this
    },
    getResult(){
        return this.errStore;
    }
}
var fn = new CheckObj();

console.log(fn.checkName('yy').checkPassword('12345').getResult())