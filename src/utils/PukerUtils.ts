class PukerUtils {
	public constructor() {
	}

	private pukerValues:Array<number> =  [  1,1,1,1,
											2,2,2,2,
											3,3,3,3,
											4,4,4,4,
											5,5,5,5,
											6,6,6,6,
											7,7,7,7,
											8,8,8,8,
											9,9,9,9,
											10,10,10,10,
											11,11,11,11,
											12,12,12,12,
											13,13,13,13,
											14,14];

	/**
	 * 牌面对应的牌的大小
	 */
	private static pukerOrderValues:Array<string> = [  "D","D","D","D",//A
												"C","C","C","C",//2
												"O","O","O","O",//3
												"N","N","N","N",//4
												"M","M","M","M",//5
												"L","L","L","L",//6
												"K","K","K","K",//7
												"J","J","J","J",//8
												"I","I","I","I",//9
												"H","H","H","H",//10
												"G","G","G","G",//J
												"F","F","F","F",//Q
												"E","E","E","E",//K
												"B","A"//King
												];
    /**
	 * 牌面的id
	 */
	private static pukerIds:Array<number> = [
					1,2,3,4,//A
					5,6,7,8,//2
					9,10,11,12,//3
					13,14,15,16,//4
					17,18,19,20,//5
					21,22,23,24,//6
					25,26,27,28,//7
					29,30,31,32,//8
					33,34,35,36,//9
					37,38,39,40,//10
					41,42,43,44,//J
					45,46,47,48,//Q
					49,50,51,52,//K
					53,54];//King

	/**
	 * 将一手牌的牌面id的表现形式转化为排序规则的表现形式
	 */
	public static casePukers(a:Array<number>):Array<string>{
		let aSort:Array<string> = [];
		for(let i = 0 ; i < a.length ; i++){

			for(let j = 0 ; j < this.pukerIds.length ; j ++){
				if(a[i] == this.pukerIds[j]){
					aSort.push(this.pukerOrderValues[j]);
				}
			}
		}
		return aSort;
	}

	/**
	 * 正序排列的排序条件
	 */
	public static sortASC(a,b):number{
            if(a>b) return 1;
            else if(a<b) return -1;
            else return 0;    
    }
	/**
	 * 倒序排列的排序条件
	 */
	public static sortDESC(a,b):number{
            if(a>b) return -1;
            else if(a<b) return 1;
            else return 0;    
    }
	/**
	 * 随机生成一副扑克
	 */
	public static init():Array<number>{
		let length = this.pukerIds.length;
		let index:number;
		let newArray:Array<number> = this.pukerIds.slice();
		let pukerIndex:number;
		let array:Array<number> = [];
		for(let i = 0 ; i < this.pukerIds.length ; i ++){
			index = Math.floor(Math.random() * newArray.length);
			pukerIndex = newArray[index];
			array.push(pukerIndex);
			// console.log("value:",newArray[index]);
			// this.slice(newArray,0,index);
			// this.slice(newArray,index + 1,newArray.length);
			newArray = ArrayUtils.slice(newArray,0,index).concat(ArrayUtils.slice(newArray,index + 1,newArray.length));
			// console.log("newArray:",newArray.toString());
			length --;
		}	
		console.log(array.toString());
		return array;
	}



	/**
	 * 从一副牌中判断有没有符合条件的顺子
	 * 
	 */
	public static findStraight(){
		let pattern = /5+6+7+8+9+/;
		let str = "34456667889";
		console.log("test:",pattern.test(str)?pattern.exec(str):"没有匹配项");
	}

	/**
	 * 从一副牌中判断有没有符合条件的三带
	 */
	public static findThree(){
		let pattern = /7{3,}/;
		let str = "34577789";
		console.log("test:",pattern.test(str)?pattern.exec(str):"没有匹配项");
	}

	/**
	 * 从一副牌中判断有没有符合条件的对子
	 */
	public static findPair(){
		let pattern =  /7{2,}/;
		let str = "34577789";
		console.log("test:",pattern.test(str)?pattern.exec(str):"没有匹配项");
	}

	public static randomUsers:Array<any> = [
        {uid:"1001",name:"大可",sex:"man"},
        {uid:"1002",name:"Tiger",sex:"lady"},
        {uid:"1003",name:"翔",sex:"man"},
        {uid:"1004",name:"傻源源",sex:"man"},
        {uid:"1005",name:"傻乐乐",sex:"man"},
        {uid:"1006",name:"小巴西",sex:"lady"},
        {uid:"1007",name:"油烟机",sex:"man"},
        {uid:"1008",name:"可乐鸡翅",sex:"lady"},
        {uid:"1009",name:"酸辣土豆丝",sex:"lady"},
        {uid:"1010",name:"糖拌西红柿",sex:"man"},
        {uid:"1011",name:"拍黄瓜",sex:"man"},
        {uid:"1012",name:"空调没有遥控器",sex:"man"},
        {uid:"1013",name:"这么晚了还不回家",sex:"lady"},
        {uid:"1014",name:"程咬金",sex:"man"},
        {uid:"1015",name:"猫砂不会盖",sex:"man"},
        {uid:"1016",name:"风扇不摇头",sex:"man"},
        {uid:"1017",name:"油炸花生米",sex:"man"},
        {uid:"1018",name:"电视不能看",sex:"man"},
        {uid:"1019",name:"绿萝",sex:"lady"},
        {uid:"1020",name:"薄荷糖不麻",sex:"lady"},
        {uid:"1021",name:"翔的小姐姐",sex:"lady"},
        {uid:"1022",name:"孤单想吃西瓜",sex:"man"},
        {uid:"1023",name:"一个人看烟花",sex:"lady"},
        {uid:"1024",name:"大海啊你全是水",sex:"man"},
        {uid:"1025",name:"骏马啊你四条腿",sex:"man"}
        ];

	public static getRandomUser():any{
		return this.randomUsers[Math.floor(Math.random() * this.randomUsers.length)];
	}
	public static textTip:Array<string> = [
		"不要","没你的大","要不起","你厉害","我认怂","你牛","过","GO","PASS","0.0"
	];
	public static getRandomTextTip():string{
		return this.textTip[Math.floor(Math.random() * this.textTip.length)];
	}
}