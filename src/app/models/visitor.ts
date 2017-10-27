export class Visitor {
  constructor(
       public _id: string,
       public name : String,
       public age: Number,
       public location : string,
       public blog: string
   ){}

   static CreateDefault(): Visitor {
       return new Visitor('', '', 0, '', '');
   }
}
