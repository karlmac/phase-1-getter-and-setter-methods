// Add your Circle class here

class Circle {
    constructor (radius) {
        this.radius = radius;
    }
    
    get diameter() {
        return this.radius * 2;
    }
    set diameter(newDiameter) {
        this.radius = newDiameter/2;
    }
    
    get circumference() {
        return this.diameter * Math.PI;
    }
    set circumference(newCir) {
        const newDiameter = newCir/Math.PI;
        this.radius = newDiameter/2;
    }
    
    get area() {
        return Math.PI * (this.radius * this.radius);
    }
    set area(newArea) {
        const newRadiusSq = newArea/Math.PI;
        this.radius = Math.sqrt(newRadiusSq);
    }
}

// const cir = new Circle(20);  cir.diameter = 100;
// console.log("diameter", cir.diameter); console.log("circumference", cir.circumference);console.log("area", cir.area);console.log("radius", cir.radius);
