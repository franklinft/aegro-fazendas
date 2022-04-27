import { RegistroOperacional } from './registro-operacional.interface';
import { Talhao } from "./talhao.interface";

export interface Fazenda {
    id?: string;
    descricao?: string;
    localizacao?: string;
    hectares?: number;
    talhoes?: Talhao[];
    operacoes?: RegistroOperacional[];

    calcularProducao(registros: RegistroOperacional[]): void;
}