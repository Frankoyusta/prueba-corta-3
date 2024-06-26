import { Component, OnInit } from '@angular/core';
import { CreateMember } from 'src/app/_interfaces/create-member';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styles: [],
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];
  showModal: boolean = false;
  showModalE: boolean = false;
  selectedInt: CreateMember|null = null;

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe({
      next: (members) => {
        this.members = members;
      },
    });
    
  }

  openModal():void{
    this.showModal = true;
  }

  closeModal():void{
    this.showModal = false;
  }

  openModalEdit(integrant: CreateMember):void{
    this.selectedInt =integrant
    this.showModalE = true;
  }

  closeModalEdit():void{
    this.showModalE = false;
  }
}
