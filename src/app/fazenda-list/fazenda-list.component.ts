import { TalhaoCreateComponent } from './../talhao-create/talhao-create.component';
import { FazendaService } from './../services/fazenda.service';
import { Fazenda } from './../interfaces/fazenda.interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FazendaCreateDialogComponent } from '../fazenda-create-dialog/fazenda-create-dialog.component';
import { FazendaInfoComponent } from '../fazenda-info/fazenda-info.component';


@Component({
  selector: 'app-fazenda-list',
  templateUrl: './fazenda-list.component.html',
  styleUrls: ['./fazenda-list.component.scss']
})
export class FazendaListComponent implements OnInit {
  
  dataSource: Fazenda[] = []
  displayedColumns: string[] = ['descricao', 'hectares', 'localizacao', 'addAreaTalhao', 'atividades'];

  constructor(
    private fazendaService: FazendaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
   this.obterFazendas();
  }
 
  obterFazendas() {
    this.fazendaService.getFazendas().subscribe(doc => {
      this.dataSource = doc.map((fazenda) => {
        return { 
         id: fazenda.payload.doc.id,
         ...fazenda.payload.doc.data() as Fazenda
        }
      })
    });
  }

  criarTalhaoDialog(fazenda: any) {
    const dialogRef = this.dialog.open(TalhaoCreateComponent, {
      width: '75%',
    });

    dialogRef.componentInstance.carregarFazenda(fazenda, fazenda.id);
  }

  criarRegAtividadesDialog(fazenda: any) {
    const dialogRef = this.dialog.open(FazendaInfoComponent, {
      width: '100%',
    });

    dialogRef.componentInstance.obterInfoFazenda(fazenda)
  }

  criarFazendaDialog(): void {
    const dialogRef = this.dialog.open(FazendaCreateDialogComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((fazenda: Fazenda) => {
      this.fazendaService.createFazenda(fazenda).then(() => {
        console.log("Criado com sucesso")
      })
    });
  }
}
