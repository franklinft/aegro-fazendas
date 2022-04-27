import { UnidadeMedida } from "./unidadeMedida.interface";

export interface Insumo {
    descricao: string;
    unidadeMedida: UnidadeMedida;
    dose: number;
    total: number;
}