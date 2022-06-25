class Branch{

    constructor(startPoint, dir, length, color){

        this.startPoint = startPoint;
        this.dir = dir;
        this.endPoint = Vector2.Add(startPoint, Vector2.Multiply(length, dir));
        this.length = length;
        this.color = color;
        this.haveBeenGrown = false;
        this.childBranches = [];
    }

    GrowBranches(lengthDampeningFactor, angleCoveredByNewBranches, numberOfBranches){

        if(this.haveBeenGrown){

            console.log("Already grown");
            return null;
        }

        if(this.length * lengthDampeningFactor < 1)
            return null;

        let directions = this.GetDirections(angleCoveredByNewBranches, numberOfBranches);

        for(let i=0;i<directions.length;i++){

            this.childBranches[i] = new Branch(this.endPoint, directions[i], 
                                                this.length * lengthDampeningFactor, {r: 255, g:255,b:255}); 
        }

        this.haveBeenGrown = true;
        return this.childBranches;
    }

    GetDirections(totalAngle, numberOfBranches){

        let directions = [];
        if(numberOfBranches == 1){
            
            directions.push(Vector2.GetCopy(this.dir));
        } else if(numberOfBranches > 1){

            let angleDelta = totalAngle/(numberOfBranches - 1);
            let currentAngle = totalAngle/2;
            
            directions.push(Vector2.RotateCounterClockWise(currentAngle, this.dir));
            for(let i=0;i<numberOfBranches-1;i++){

                currentAngle -= angleDelta;
                directions.push(Vector2.RotateCounterClockWise(currentAngle, this.dir));                
            }
        }

        return directions;
    }

    Show(ctx){

        ctx.strokeStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
        ctx.beginPath();
        ctx.moveTo(this.startPoint.x, this.startPoint.y);
        ctx.lineTo(this.endPoint.x, this.endPoint.y);
        ctx.stroke();
    }
}