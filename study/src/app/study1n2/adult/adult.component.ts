import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adult',
  templateUrl: './adult.component.html',
  styleUrls: ['./adult.component.css']
})
export class AdultComponent implements OnInit {
  @Input('shared') shared;
  characters: Array<any>;
  constructor() { }

  ngOnInit() {
    // this.getCharacters();
    this.shared.getCharacters().subscribe(
     characters => this.characters = characters
   );
 }

//  getCharacters(): void {
//    this.shared.getCharacters()
//    .then(characters => this.characters = characters);
//  }
// youngerMagic(character, younger) {

//   const index = this.characters.indexOf(character, 0);
//    if (index > -1) {
//      this.characters[index].age -= younger;
//      if (this.characters[index].age <= 0) {
//        this.characters.splice(index, 1);
//      }
//    }
// }
  youngerMagic(character, younger){
    this.shared.youngerMagic(character, younger);
  }

}
