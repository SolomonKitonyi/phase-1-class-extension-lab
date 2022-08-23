// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get countSides () {
        return this.sides.length;
    }
    get perimeter() {
        let sum = 0;
        let ans = this.sides.reduce((acc,value) => {
            return sum = sum + value
        },0)
        return ans
    }
}

class Triangle extends Polygon {
    get isValid () {
        if(this.sides.length !== 3) return false;
        if(this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[1] + this.sides[2] <= this.sides[0] ){
            return false
        }
        else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid () {
        if(this.sides.length !== 4) return false;
        if(this.sides[0] !== this.sides[1] && this.sides[2] !== this.sides[3]) return false;
        else { return true}
    }
    get area () {
        return this.sides[0] ** 2;
    }
}