import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Fazenda } from '../interfaces/fazenda.interface';
import { arrayUnion } from '@angular/fire/firestore'
import { doc, updateDoc} from "firebase/firestore";
import { RegistroOperacional } from '../interfaces/registro-operacional.interface';

@Injectable({
  providedIn: 'root'
})
export class TalhaoService {

  constructor(private firestore: AngularFirestore) { }

  async createTalhao(fazenda: Fazenda, talhao: any): Promise<any> {
    const fazendaRef = doc(this.firestore.firestore, "aegro-fazendas", `${fazenda.id}`);
    
    try {
      await updateDoc(fazendaRef, {
        talhoes: arrayUnion({descricao: talhao.descricao, area: talhao.area})
      });
    } catch (e) {
      console.log(e);
    }
  }

  async createOpTalhao(fazenda: Fazenda, rgOperacional: RegistroOperacional): Promise<any> {
    const fazendaRef = doc(this.firestore.firestore, "aegro-fazendas", `${fazenda.id}`);

    try {
      await updateDoc(fazendaRef, {
        operacoes: arrayUnion({operacao: rgOperacional.operacao, dataInicio: rgOperacional.dataTermino, insumo: rgOperacional.insumo, talhaoId: rgOperacional.talhaoId})
      });
    } catch (e) {
      console.log(e);
    }
  }
}
