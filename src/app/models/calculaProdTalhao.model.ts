import { RegistroOperacional } from "../interfaces/registro-operacional.interface";

export class CalcularProducaoTalhao implements RegistroOperacional {

    constructor() {}
   
    calcularProdutividade(registros?: RegistroOperacional[]): number {
        return registros?.length as number;
    }
}