import { Fazenda } from './../interfaces/fazenda.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { setDoc } from '@angular/fire/firestore'
import { doc } from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class FazendaService {

  constructor(private firestore: AngularFirestore) { }

  getFazendaById(id: string) {
    return this.firestore.collection('aegro-fazendas').doc(id).snapshotChanges();
  }

  getFazendas() {
    return this.firestore.collection('aegro-fazendas').snapshotChanges();
  }

  async createFazenda(fazenda: Fazenda): Promise<any> {
    try {
      const docRef = await setDoc(doc(this.firestore.firestore, "aegro-fazendas", `${fazenda.descricao}`), fazenda);
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}
