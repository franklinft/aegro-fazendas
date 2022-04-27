import { SnackBarService } from './../services/snack-bar.service';
import { FazendaService } from './../services/fazenda.service';
import { Fazenda } from './../interfaces/fazenda.interface';
import { AppComponent } from '../app.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-fazenda-create',
  templateUrl: './fazenda-create-dialog.component.html',
  styleUrls: ['./fazenda-create-dialog.component.scss']
})
export class FazendaCreateDialogComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fazendaService: FazendaService,
    private alertaSnackBar: SnackBarService,
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fazenda,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      descricao: ["", Validators.required],
      hectares: ["", Validators.required], 
      localizacao: ["", Validators.required],
      talhoes: []
    }); 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.fazendaService.createFazenda(this.form.value as Fazenda).then((fazenda => {
      this.dialogRef.close(this.form.value as Fazenda);
      this.alertaSnackBar.alertaSnackBar('Fazenda Salva com sucesso!', 'Fechar');
    }))
  }
}