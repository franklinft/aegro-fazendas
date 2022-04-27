import { RegistroOperacional } from './../interfaces/registro-operacional.interface';
import { Fazenda } from "../interfaces/fazenda.interface";

export class CalculaProducaoFazenda implements Fazenda {

    constructor() {
    }

    calcularProducao(registros: RegistroOperacional[]): number {
        return registros.length;
    }
}