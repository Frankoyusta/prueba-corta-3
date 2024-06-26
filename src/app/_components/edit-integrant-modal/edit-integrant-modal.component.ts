import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateMember } from 'src/app/_interfaces/create-member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-edit-integrant-modal',
  templateUrl: './edit-integrant-modal.component.html',
  styleUrls: ['./edit-integrant-modal.component.css']
})
export class EditIntegrantModalComponent implements OnInit  {
  @Input() id: number = 0;
  @Output() closeModalEdit = new EventEmitter<void>();
  integrantForm: FormGroup = new FormGroup({});
  errorMessage: string = '';


  constructor (private fb: FormBuilder, private memberservice: MemberService){}


  ngOnInit(): void {
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
      const response = this.memberservice.updateMember(this.id,newCreateMember).subscribe({
      })
      
      return
    } catch (error) {
      console.log('error invalido pete')
      return
    }
  }




}
