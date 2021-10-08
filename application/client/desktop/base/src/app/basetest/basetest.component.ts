import { Component, OnInit } from '@angular/core';
import { BasetestService } from './basetest.service';

@Component({
  selector: 'app-basetest',
  templateUrl: './basetest.component.html',
  styleUrls: ['./basetest.component.scss'],
})

export class BasetestComponent implements OnInit {
    public base = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        Enter_Name: '',
    }

    constructor (
        private basetestService: BasetestService,
    ) { }

    ngOnInit() {
        this.base.created_by = sessionStorage.getItem('email'); 
    }
}