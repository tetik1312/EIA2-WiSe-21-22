namespace L09_2_Classes {
    export class Vector {
        x: number;
        y: number;
        posX: number;
        posY: number;
        size: number;
    
        velocityX: number;
        velocityY: number;
    
        constructor(_position: Vector, _velocity: Vector) {
              this.posX = _position.x; 
              this.posY = _position.y; 
    
              this.velocityX = _velocity.x;
              this.velocityY = _velocity.y;
        }
    
    
        draw(): void {
            //
        }
    }
}