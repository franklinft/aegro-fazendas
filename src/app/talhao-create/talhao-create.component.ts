import { SnackBarService } from './../services/snack-bar.service';
import { TalhaoService } from './../services/talhao.service';
import { Talhao } from './../interfaces/talhao.interface';
import { Fazenda } from './../interfaces/fazenda.interface';
import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-talhao-create',
  templateUrl: './talhao-create.component.html',
  styleUrls: ['./talhao-create.component.scss']
})
export class TalhaoCreateComponent implements OnInit {

  form!: FormGroup;
  formArray!: FormArray;
  fazenda = {} as Fazenda;
  talhao!: Talhao;

  constructor(
    private fb: FormBuilder,
    private talhaoService: TalhaoService,
    private alertaSnackBarService: SnackBarService,
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fazenda,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        descricao: ["", Validators.required],
        area: [null, Validators.required],
      },
    );
  }

  carregarFazenda(fazenda: Fazenda, id: string) {
    this.fazenda = fazenda;
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  salvarTalhao() {
    if(this.form.valid) {
      this.talhaoService.createTalhao(this.fazenda, this.form.value);
      this.dialogRef.close();
      this.alertaSnackBarService.alertaSnackBar('Talhão Salvo com sucesso!', 'Fechar');
    }
  }

}
