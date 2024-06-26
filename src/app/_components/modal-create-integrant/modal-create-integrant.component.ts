import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MemberService } from 'src/app/_services/member.service';
import { CreateMember } from 'src/app/_interfaces/create-member';

@Component({
  selector: 'app-modal-create-integrant',
  templateUrl: './modal-create-integrant.component.html',
  styleUrls: ['./modal-create-integrant.component.css']
})
export class ModalCreateIntegrantComponent implements OnInit {
    @Output() closeModal = new EventEmitter<void>();
    integrantForm: FormGroup = new FormGroup({});
    errorMessage: string = '';


    constructor(private fb: FormBuilder, private memberservice: MemberService ){}

    ngOnInit(): void {
      console.log('Entro al fakin modal')
      this.initializeForm();
    }


    initializeForm(): void {
      this.integrantForm = this.fb.group({
        Name: ['', [Validators.required]],
        Email: ['',[Validators.required, Validators.email]],
        Semester: ['',[Validators.required, Validators.min(1)]],
        Career: ['',[Validators.required]]
      });
    }

    onSubmit(): void {
      if(this.integrantForm.invalid){
        this.errorMessage = 'Formulario invalido'
        console.log('formulario invalido pete')
        return
      }

      try {
        console.log('muy buenas a todos chavales')
        const data = this.integrantForm.value
        const newCreateMember : CreateMember = data;
        const response = this.memberservice.createMember(newCreateMember).subscribe({
        })
        
        return
      } catch (error) {
        console.log('error invalido pete')
        return
      }
    }

}
