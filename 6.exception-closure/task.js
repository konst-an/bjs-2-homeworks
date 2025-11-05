// ЗАДАНИЕ 1 
function parseCount (value) {
    if (Number.isNaN(Number.parseFloat(value))) {
        throw new Error("Невалидное значение");
    } else {
        return Number.parseFloat(value);
    }
}

function validateCount (value) {
    try {
        return parseCount (value);
    } catch (error) {
        return error;
    }
}

// ЗАДАНИЕ 2

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((this.a + this.b) <= this.c ||
            (this.a + this.c) <= this.b ||
            (this.b + this.c) <= this.a) {
                
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let halfPerimeter = 0.5 * (this.a + this.b + this.c);
        let square = Math.sqrt(halfPerimeter * 
                     (halfPerimeter - this.a) * 
                     (halfPerimeter - this.b) * 
                     (halfPerimeter - this.c));
            
        return Number(square.toFixed(3));
    }
}

function getTriangle (a, b, c) {
    try {
       return new Triangle(a, b, c);
    } catch (error) {
         return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}

