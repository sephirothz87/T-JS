function L_4() {

    // this.f1 = ()=>{console.log('L_3 f1');};

    this.f2 = ()=>{console.log('L_4 f2');};

    this.f3 = ()=>{console.log('L_4 f3');};
}

L_4.prototype.f1 = ()=>{console.log('L_4_P f1');};
L_4.prototype.f2 = ()=>{console.log('L_4_P f2');};
L_4.prototype.f3 = ()=>{console.log('L_4_P f3');};

function L_3() {

    // this.f1 = ()=>{console.log('L_3 f1');};

    this.f2 = ()=>{console.log('L_3 f2');};

    this.f3 = ()=>{console.log('L_3 f3');};
}

L_3.prototype.f1 = ()=>{console.log('L_3_P f1');};
L_3.prototype.f2 = ()=>{console.log('L_3_P f2');};
L_3.prototype.f3 = ()=>{console.log('L_3_P f3');};


function L_2() {

    this.f1 = ()=>{console.log('L_2 f1');};

    this.f2 = ()=>{console.log('L_2 f2');};

    this.f3 = ()=>{console.log('L_2 f3');};
}

L_2.prototype.f1 = ()=>{console.log('L_2_P f1');};
L_2.prototype.f2 = ()=>{console.log('L_2_P f2');};
L_2.prototype.f3 = ()=>{console.log('L_2_P f3');};


function L_1() {

    this.f1 = ()=>{console.log('L_1 f1');};

    this.f2 = ()=>{console.log('L_1 f2');};

    this.f3 = ()=>{console.log('L_1 f3');};
}

L_1.prototype.f1 = ()=>{console.log('L_1_P f1');};
L_1.prototype.f2 = ()=>{console.log('L_1_P f2');};
L_1.prototype.f3 = ()=>{console.log('L_1_P f3');};




var l1 = new L_1();

L_2.prototype = l1;


var l2 = new L_2();
console.log(l2);



L_3.prototype = l2;
console.log(l2);
//打印出来的类型名，l2会变成L_1类型，但是内容依然是l2的内容，还不明白这里的原理
//怀疑是chrome的bug，记得以前写原型链的时候也遇到过这种问题

//一种解释是console会打印到根级类型，即console自己会顺着原型链去找到最终原型并打印

var l3 = new L_3();

L_4.prototype = l3;
console.log(l3);






l3.f1();

console.log(l3);
console.log(l2);
console.log(l1);

console.log(l3.__proto__ === L_3.prototype);
console.log(L_3.prototype === l2);