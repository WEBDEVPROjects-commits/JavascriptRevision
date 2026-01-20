class Animal{
    static a=10;
    constructor (){
        console.log("This is animal constructor")
        console.log(this);
    }
    hide(){
        console.log("animal hides")
    }
    run(){
        console.log("animal can run")
    }

}
class rabbit extends Animal{
    // constructor(){
    //     console.log("this is rabbit constructor")
    // }
    run(){
        super.run();
        console.log("rabbit can run")
        console.log(this.hide())
    }

}
let anm1=new Animal;
let rb1=new rabbit;
console.log(anm1.run())
console.log(rb1.run())
console.log(Animal.a)
// console.log(Animal.run())
console.log()
console.log(rb1 instanceof rabbit)