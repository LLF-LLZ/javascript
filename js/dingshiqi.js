			var timer;

			function move(obj, speed, target, arr, callback) {
				clearInterval(obj.timer);
				//获取元素当前的位置
				var current = parseInt(getStyle(obj, arr));
				if(current > target) {
					speed = -speed;
				}
				obj.timer = setInterval(function() {
					//获取box1原来的left值
					var old = parseInt(getStyle(obj, arr));
					//console.log(old);
					//在旧值增加
					var newvalue = old + speed;
					//console.log(new);
					obj.style[arr] = newvalue + "px";
					if(speed < 0 && newvalue < target || speed > 0 && newvalue > target) {
						newvalue = target;
					}
					obj.style[arr] = newvalue + "px";
					if(newvalue == target) {
						clearInterval(obj.timer);
						callback && callback();
					}
				}, 30);
			}

			function getStyle(obj, name) {
				if(window.getComputedStyle) {
					return getComputedStyle(obj, null)[name];
				} else {
					return obj.currentStyle[name];
				}
			}

			function addClass(obj, cn) {
				//检查是否有cnclass
				if(!hasClass(obj, cn)) {
					obj.className += " " + cn;
				}
			}
			//判断一个元素中是否含有指定的class属性值
			function hasClass(obj, cn) {
				//var reg=/b2/;
				var reg = new RegExp("\\b" + cn + "\\b");
				return reg.test(obj.className);
			}
			//删除指定类
			function removeClass(obj, cn) {
				var reg = new RegExp("\\b" + cn + "\\b");
				obj.className = obj.className.replace(reg, "");
			}

			function toggleClass(obj, cn) {
				/*
				 * toggleClass用来切换一个类
				 * 元素有该类，就删除
				 * 没有就添加
				 */
				if(hasClass(obj, cn)) {
					removeClass(obj, cn);
				} else {
					addClass(obj, cn)

				}
			}