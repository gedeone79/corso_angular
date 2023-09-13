import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  isDisabled = true;
  title = "";


  cani = [
    {
      nome : 'Fido',
      razza: 'BullDog',
      testo : `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`
    }
  ];

  onInput(e: Event){
    console.log((<HTMLInputElement>e.target).value);
    this.title = (<HTMLInputElement>e.target).value;
    console.log(e);
  }

  onClick(e: Event){
    this.title = "Ho Cliccato sul bottone";
    // @ts-ignore
    //window.document.getElementById("inp").value = this.title;
    console.log(e);
  }



  constructor() {
    console.log("constructor");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
    }

  ngOnInit(): void {
    console.log("ngOnInit");
   /* setInterval(()=>{
      this.isDisabled = !this.isDisabled;
    },2000);*/
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

}
