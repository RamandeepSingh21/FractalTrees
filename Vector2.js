class Vector2{

    x = 0;
    y = 0;

    constructor(x, y){

        this.x = x;
        this.y = y;
    }

    SetVector(x, y){

        this.x = x;
        this.y = y;
    }

    static Add(v1, v2){

        return new Vector2(v1.x + v2.x, v1.y + v2.y);
    }

    static Multiply(a, v){

        return new Vector2(v.x * a, v.y * a);
    }

    static Subtract(v1, v2){

        return new Vector2(v2.x - v1.x, v2.y - v1.y);
    }

    static RotateCounterClockWise(angle, v){

        let aRad = angle * (Math.PI/180);
        let newX = v.x * Math.cos(aRad) - v.y * Math.sin(aRad);
        let newY = v.x * Math.sin(aRad) + v.y * Math.cos(aRad);

        return new Vector2(newX, newY);
    }

    static GetCopy(v){

        return new Vector2(v.x, v.y);
    }

    GetMagnitude(){

        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    Normalize(){

        let magnitude = this.GetMagnitude();
        this.x/=magnitude;
        this.y/=magnitude;
    }

}