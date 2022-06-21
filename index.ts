// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
  departamento: string
  constructor (departamento:string){
    this.departamento = departamento
  }
  getName(){
    return this.departamento
  }
}

class Piso {
  nombre: string
  departamentos: Departamento[]
  constructor (piso:string){
    this.nombre = piso
    this.departamentos = []
  }
  pushDepartamento(departamento: Departamento){
    return this.departamentos.push(departamento)
  }
  getDepartamentos():Departamento[]{
    return this.departamentos 
  }
}

class Edificio {
  pisos: Piso[]
  constructor(pisos: Piso[]){
    this.pisos = pisos
  }
  addDepartamentoToPiso(nombrePiso:string, departamento: Departamento){
    const pisoAModificar = this.pisos.find(piso => piso.nombre == nombrePiso)
    return pisoAModificar.pushDepartamento(departamento)
  }   

  getDepartamentosByPiso (nombreDePiso: string):Departamento[] {
    const pisoADevolver = this.pisos.find(piso => piso.nombre == nombreDePiso) 
        return pisoADevolver.getDepartamentos()
      }
  }




// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  console.log("Cambiaron cosas");
}
main();
