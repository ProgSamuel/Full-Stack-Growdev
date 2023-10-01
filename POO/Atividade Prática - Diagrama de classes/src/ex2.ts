
interface elementFormat {
    draw(): void;
    resize(measure:number,  measure2:number): void; 
}


export class circle implements elementFormat {
    constructor(public raio: double) {}

    draw(): void {
        console.log('Drawing a circle');
    }

    resize(measure:number): void {
        console.log('Resizing the circle'); 
        console.log('It has been resized to', measure);
        
    }
}
export class rectangle implements elementFormat {
    constructor(public greeting: double, public height:double) {}

    draw(): void {
        console.log('Drawing a rectangle');
    }
    resize(measure:number, measure2:number): void {
        console.log('Resizing the rectangle');
        console.log('It has been resized to', measure, 'x', measure2);
    }
}