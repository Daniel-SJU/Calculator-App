import { Component, OnInit, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'calculator-app';

 calculatorForm: FormGroup;

 constructor(private fb : FormBuilder){
  this.calculatorForm = this.fb.group({
    inputValue: ['']
  });
 }

 addToOperation(event : Event){
  const button = event.target as HTMLButtonElement; 
  const value = button.innerText;
  this.calculatorForm.controls['inputValue'].setValue(this.calculatorForm.controls['inputValue'].value + value);
 }

 evaluate(){
  const result = eval(this.calculatorForm.controls['inputValue'].value);
  this.calculatorForm.controls['inputValue'].setValue(result);
 }

 clear(){
  this.calculatorForm.controls['inputValue'].setValue('');
 }
}
