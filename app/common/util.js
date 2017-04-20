/**
 * 工具函数
 * @Date 2017-04-05
 */
let util = {
	/**
	 * [adapt 屏幕自适应]
	 * @param  {Number} designWidth [标准设计稿尺寸]
	 * @param  {Number} rem2px      [标准设计稿下1rem等于多少px]
	 * @return {[null]}             []
	 */
	adapt(designWidth = 640,rem2px = 100){
		let doc = window.document,
		d = doc.createElement('div');
		d.style.width ='1rem';
		d.style.display = 'none';
		let head = doc.getElementsByTagName('head')[0];
		head.appendChild(d);
		let defaultFontSize = parseFloat(window.getComputedStyle(d,null).getPropertyValue('width'));
		d.remove();
		doc.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px /defaultFontSize * 100 +'%';
		let st = doc.createElement('style');
		let portrait = "@media screen and (min-width: "+window.innerWidth+"px) {html{font-size:"+ ((window.innerWidth/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}";
  		let landscape = "@media screen and (min-width: "+window.innerHeight+"px) {html{font-size:"+ ((window.innerHeight/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}"
  		st.innerHTML = portrait + landscape;
  		head.appendChild(st);
    },
    /**
     * [debounce 防反跳]
     * @param  {[Function]} func      [防反跳的函数]
     * @param  {[Number]} threshold [时间间隔]
     * @param  {[Boolean]} execAsap  [是否立即执行，true立即执行，默认为false]
     * @param  {[Function]} fun       [如果存在，一定会执行的函数]
     * @return {[null]}          
     */
    debounce(func, threshold = 100, execAsap = false, fun){
    	let timeout;
    	return function debounced(){
    		let self = this, args = arguments;
    		function delayed(){
    			if(!execAsap) func.apply(self,args);
    			timeout = null;
    		}

    		if(timeout){
    			clearTimeout(timeout);
    		}else if(execAsap){
    			 func.apply(self,args);
    		}
    		timeout = setTimeout(delayed,threshold);
    		
    		if(fun) fun.apply(self,args);
    	}
    },
    /**
     * [debounceAdapt 动态计算媒体查询]
     * @param  {Number} designWidth [标准设计稿尺寸]
	 * @param  {Number} rem2px      [标准设计稿下1rem等于多少px]
     */
    debounceAdapt(designWidth = 640,rem2px = 100) {
    	this.adapt(designWidth,rem2px);//屏幕自适应处理
		window.onresize = this.debounce(() => {
			this.adapt(designWidth,rem2px);
		},200,false);
    },
    /**
     * [adaptHeight 高度自适应]
     * @param  {[String]} domId       [控制dom高度的id]
     * @param  {[Number]} otherHeight [除了domId其余部分高度]
     * @param  {[Number]} threshold [时间间隔]
     */
    adaptHeight(domId,otherHeight,threshold = 300){
        let mapDom,bodyHeight ;
        otherHeight = parseFloat(otherHeight)||0;
        mapDom = document.getElementById(domId);
        mapDom.style.height = getHeight()+"px";
       
        window.onresize = this.debounce(()=>{
            if(__DEV__) console.log(mapDom.style.height);
            mapDom.style.height = getHeight()+"px";
        },threshold);

        function getHeight(){
            var height = 500;//最好设置个最小
            if(document.documentElement.clientHeight > 500)
                height = document.documentElement.clientHeight - otherHeight;
            return height;
        }
    },
    /**
     * [getJSON 获取json文件]
     * @param  {[String]} url [url地址]
     * @return {[Promise]}     [promise]
     */
    getJson(url){
        let promise = new Promise((resolve, reject)=>{
            let client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();

            function handler() {
                if (this.readyState !== 4) {
                  return;
                }
                if (this.status === 200) {
                  resolve(this.response);
                } else {
                  reject(new Error(this.statusText));
                }
            };
          });

         return promise;
        
    },
    /*showTipWin(text,time = 500,style={width:"100px",height:"100px"}){
        let div = document.createElement('div'); 
        div.style.display = "absolute";
        div.style.width = style.width;
        div.style.height = style.height;
        div.style.
    },*/
    /**
     * [cloneObj 深拷贝对象]
     * @param  {[Object]} obj [被拷贝的对象]
     * @return {[Object]}     [返回拷贝后的对象]
     */
    cloneObj(obj){
        let newObj,s;
        if(typeof obj!== 'object') return;
        newObj = obj.constructor === Object ? {} : [];
        if(window.JSON){
            s = JSON.stringify(obj);
            newObj = JSON.parse(s);
        }else{
            if(newObj.constructor === Array){
                newObj.concat(obj);
            }else{
                for(let o in obj){
                   newObj[i] = obj[i]; 
                } 
            }
        }

        return newObj;
    },
    byClassName(className,index){
        if(index !== undefined) return document.getElementsByClassName(className)[index];
        return document.getElementsByClassName(className);
    },
    ByIdName(id){
        return document.getElementById(id);
    },
    /**
     * [getScript 异步加载script]
     * @param  {[String]} url [script地址]
     * @return {[Promise]}     [promise]
     */
    getScript(url){
        let promise = new Promise((resolve,reject)=>{
            let script = document.createElement('script');
            script.type = 'text/javascript';

            script.onreadystatechange = ()=>{
                if(this.readyState=='complete'){
                    resolve();
                }
            }
            script.onload = ()=>{
                resolve();
            }
            script.onerror = ()=>{
                reject();
            }
            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);
        })

        return promise;
    }
    
}


export default util;