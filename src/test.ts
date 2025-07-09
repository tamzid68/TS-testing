abstract class Shape{
    abstract area(): number;

    display(): void {
        console.log(`Area: ${this.area()}`);
    };
}

class Circle extends Shape{
    

    constructor(protected radius:number){
        super();
    }

    area():number{
        return Math.PI* this.radius * this.radius;
    }
}


 let circle = new Circle(15);
 circle.display();