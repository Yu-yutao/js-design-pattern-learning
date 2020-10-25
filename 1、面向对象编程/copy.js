// 用对象收编变量

var CheckObj = {
    checkName: function(){
        // 校验姓名
    },
    checkEmail: function(){
        // 校验邮箱
    },
    checkPassword: function(){
        // 验证密码
    }
}

//对象的另一种形式

var checkObj = function(){

}
checkObj.checkName = function(){
    console.log('111 - checkName')
}

console.log(checkObj.checkName);
checkObj.checkName();


// 重复利用
var CheckObject = function(){
    return {
        checkName: function(){
            console.log('222 - checkName')
        },
        // ...
    }
}

var a = CheckObject();
a.checkName();