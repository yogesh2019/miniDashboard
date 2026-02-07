import { Component, OnInit } from '@angular/core';
import { DashboardRecord } from 'src/app/models/dashboard-record-model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  records: DashboardRecord[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardRecords()
      .subscribe(data => {
        this.records = data;
      });
  }
}
