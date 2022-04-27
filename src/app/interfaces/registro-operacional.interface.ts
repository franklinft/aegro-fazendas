export interface RegistroOperacional {
    operacao?: string;
    dataInicio?: string;
    dataTermino?: string;
    insumo?: string;
    talhaoId?: string;

    calcularProdutividade(operacoes: RegistroOperacional[]): void;

}