class Person{
    name: string="Tamzid";

    printName():void{
        console.log(this.name);
    }
}

const asm = new Person();

const getname:string = asm.name;
asm.printName();
console.log(getname+" is a good");