import { TalhaoService } from './../services/talhao.service';
import { SnackBarService } from './../services/snack-bar.service';
import { CalculaProducaoFazenda } from './../models/calculaProdFazenda.model';
import { CalcularProducaoTalhao } from './../models/calculaProdTalhao.model';
import { RegistroOperacional } from './../interfaces/registro-operacional.interface';
import { Talhao } from './../interfaces/talhao.interface';
import { Fazenda } from './../interfaces/fazenda.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FazendaService } from '../services/fazenda.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-fazenda-info',
  templateUrl: './fazenda-info.component.html',
  styleUrls: ['./fazenda-info.component.scss']
})
export class FazendaInfoComponent implements OnInit {

  fazenda = {} as Fazenda;
  form!: FormGroup;
  exibirForm = false;
  talhaoSelecionado!: number;
  operacoesFiltradas: RegistroOperacional[] = [];
  producaoByTalhao: number = 0;
  producaoByFazenda: number = 0;

  constructor(private fb: FormBuilder,
              private alertaSnackBarService: SnackBarService,
              private talhaoService: TalhaoService,
              public dialogRef: MatDialogRef<AppComponent>,
              private fazendaService: FazendaService) { }

  displayedColumns: string[] = ['operacao', 'dataInicio', 'insumo'];

  ngOnInit(): void {
    this.criarFormulario();

    if(this.fazenda.operacoes != null && this.fazenda.operacoes != undefined ) {
      this.obterOperacoesByTalhao();
    }
  }

  criarFormulario() {
    this.form = this.fb.group({
      operacao: ["", Validators.required],
      dataInicio: ["", Validators.required],
      dataTermino: ["", Validators.required],
      insumo: ["", Validators.required],
      talhaoId: ["", Validators.required]
    }); 
  }

  obterInfoFazenda(fazenda: Fazenda) {
    this.fazenda = fazenda;

    if(fazenda.operacoes != null && fazenda.operacoes != undefined ) {
      this.obterProducaoFazenda(fazenda.operacoes as RegistroOperacional[]);
    }
  }

  obterTalhao(talhao: Talhao, index: number) {
    this.exibirForm = true;
    this.talhaoSelecionado = index;
    this.form.get('talhaoId')?.setValue(talhao.descricao);
    this.obterOperacoesByTalhao(talhao.descricao);
  }

  obterOperacoesByTalhao(talhaoId?: string) {   

    const operacoes = this.fazenda.operacoes as RegistroOperacional[];

    if(operacoes != null && operacoes != undefined) {
      this.operacoesFiltradas = operacoes.filter((o) => o.talhaoId == talhaoId);
    }

    this.obterProducaoTalhao(this.operacoesFiltradas);
  }

  obterProducaoTalhao(operacoes: RegistroOperacional[]) {
    const calcula = new CalcularProducaoTalhao();
    this.producaoByTalhao = calcula.calcularProdutividade(operacoes);
  }

  obterProducaoFazenda(operacoes: RegistroOperacional[]) {
    const calcula = new CalculaProducaoFazenda();
    this.producaoByFazenda = calcula.calcularProducao(operacoes);
  }

  fechar(): void {
    this.dialogRef.close();
  }

  salvarAtividade() {
    if(this.form.valid) {
      this.talhaoService.createOpTalhao(this.fazenda, this.form.value);
      this.dialogRef.close();
      this.alertaSnackBarService.alertaSnackBar('Atividade Salva com sucesso!', 'Fechar');
    }
  }
}
