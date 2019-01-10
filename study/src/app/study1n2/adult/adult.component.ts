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

  youngerMagic(character, younger){
    this.shared.youngerMagic(character, younger);
  }

}
