//Isso e um tipo 
// type Planet = {
//   name : String;
//   satelites : String[];
// }

//Criando Interfaces 
interface CelestialBody {
  name: String ;
  mass: number;

}

//A  interface e bem parecido com o type 

interface Star extends CelestialBody{
  age:number
  planets:Planet[]
}

interface Planet extends CelestialBody{
  population:number
  createSatellite:(name:String) => void 

}

//CRIANDO UMA VARIAVEL SUN e falando que ela e uma star 
let sun:Star 
sun.name = "Sol"
sun.mass = 8000
sun.age = 4.683
sun.planets = []

//Isso e um tipo herdando de uma interface oque acaba ficando bem estranho no codigo 
type Asteroide = CelestialBody & {
  size:number
}

class MilkyWayPlanet implements Planet{
  name: String;
  mass: number;
  population: number;

  constructor(name:string,mass:number,population:number) {
    this.name = name
    this.mass = mass
    this.population = population
    
  }
  createSatellite(name: String){
    //..
  };
}

