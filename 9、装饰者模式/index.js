/**
 * 装饰者模式：
 * 在不改变原对象的基础上，通过对其进行包装拓展，添加属性或者方法，
 * 式的原有对象可以满足用户更复杂的需求
 */

 window.onload = function(){

    var inputEle = document.getElementById('input');
    var noticeEle = document.getElementById('note');

    inputEle.onfocus = function(){
        noticeEle.style.display = 'none';
    }

    inputEle.onblur = function(){
        noticeEle.style.display = 'block';
    }

    // 装饰器方法
    var decorator = function(input, fn) {
        // 获取事件源
        var input = document.getElementById(input);
        // 若事件元已经绑定事件
        if(typeof input.onblur === 'function'){
            // 缓存事件
            var oldBlurFn = input.onblur;
            input.onblur = function(){
                // 执行原有函数
                oldBlurFn();
                // 执行新功能
                fn();
            }
        }else{
            input.blur = fn;
        }
    }

    decorator('input', function(){
        // 为input 失去焦点添加额外的事件
        noticeEle.style.color = 'red';
    })
 }