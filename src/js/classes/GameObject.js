{
  import Vector from './classes/Vector.js';

  export default class GameObject{
    constructor(x, y, image){
      this.location = new Vector(x,y);
      this.image = image;
    }
  }
}