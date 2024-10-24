import { Component, OnInit, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ParticlesConfig } from '../assets/particles.config';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'calculator-app';

 calculatorForm: FormGroup;

 constructor(private fb : FormBuilder){
  this.calculatorForm = this.fb.group({
    inputValue: ['']
  });
 }
ngOnInit(): void {
  this.invokeParticles();
}

/**
   * Initializes and invokes the particles.js library with the specified configuration.
   *
   * This method targets the HTML element with the ID 'particles-js' and applies the
   * provided `ParticlesConfig` to create a particle effect.
   *
   * @returns {void}
   */
invokeParticles(): void {
  particlesJS('particles-js', ParticlesConfig, function () {});
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
