//常用工具函数

export default class gzm {
    //只执行一次函数
    
    once(fn, context){
        let result;
  
        return function() { 
            if(fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
            return result;
        };
    }

    //防抖
    debounce(func, wait) {
        let time;

        return function () {
            //保存上下文
            let context = this;
            let args = arguments;

            clearTimeout(time);
            time = setTimeout(function () {
                func.apply(context, args);
            }, wait);
        }
    }

    //节流
    throttle(func, wait) {
        let context;
        let args;
        let prev = 0;

        return function () {
            var now = +new Date();
            context = this;
            args = arguments;

            if (now - prev > wait) {
                func.apply(context, args);
                prev = now;
            }
        }
    }
    
}