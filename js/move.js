/**
 * Created by Administrator on 2016/9/19.
 */
/**
 * Created by Administrator on 2016/9/19.
 */
function getStyle(obj,attr){
    if(obj.currentStyle){//IE6-8
        return obj.currentStyle[attr];
    }else{//高级浏览器
        return getComputedStyle(obj,null)[attr];
    }
}
//缓冲运动运动框架
function hcmove(obj,iTarget,attr){
    clearInterval(obj.timer);
    var speed =0;
    obj.timer = setInterval(function(){
        var curr = 0;
        if(attr == "opacity"){
            curr = Math.round(parseFloat(getStyle(obj,attr))*100);
        }else{
            curr = parseInt(getStyle(obj,attr));
        }
        speed = (iTarget - curr)/5;
        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
        if(curr == iTarget){
            clearInterval(obj.timer);
        }else{
            if(attr == "opacity"){
                curr +=speed;
                obj.style.opacity = curr/100;
                obj.style.filter = "alpha(opacity="+curr+")";
            }else{
                obj.style[attr] = curr + speed + "px";
            }
        }
    },30);
}