import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censor'
})
export class CensorPipe implements PipeTransform {
  transform(input: string, replacement: string): string {
    var cWords = ["bad", "rotten", "terrible"];

    var cWordsNum = cWords.length;
    var out = input;

    for(var i=0; i<cWords.length; i++){
        var re = new RegExp(cWords[i], "g");
        // var out = out.replace(cWords[i], replacement); <=== as is
        var out = out.replace(re, replacement.repeat(cWords[i].length));
    }

    return out;
  }
}