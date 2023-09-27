import { Component } from '@angular/core';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.scss']
})
export class TutoComponent {
  SelectedOption!: string;
  options = [
    { value: 'option 1', label1: 'Option 1' },
    { value: 'option 2', label1: 'Option 2' },
    { value: 'option 3', label1: 'Option 3' },
    { value: 'option 4', label1: 'Option 4' },
    { value: 'option 5', label1: 'Option 5' },
  ];
  selectedOption2!: string; // Variable pour stocker le choix sélectionné
  options2 = [
    { value: 'option 1', label2: 'Option 1' },
    { value: 'option 2', label2: 'Option 2' },
    { value: 'option 3', label2: 'Option 3' },
  ];
  defaultValue = "Valeur par défaut"; // Valeur par défaut
  inputValue = this.defaultValue; // Variable pour stocker la valeur en temps réel

  updateValue(event: any) {
    // Mettre à jour la variable inputValue avec la valeur saisie
    this.inputValue = event.target.value.substring(0, 20); // Limiter à 20 caractères
  }
}
