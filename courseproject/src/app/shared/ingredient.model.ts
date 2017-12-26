export class Ingredient {
 // public name: string;
 // public amount: number;

 // we can remove declaration vars , just including public in the constructor method
 // typescript behind the scene will create for us
  constructor(public name: string,public amount: number) {
   // this.name = name;
   // this.amount = amount;
  }
}
