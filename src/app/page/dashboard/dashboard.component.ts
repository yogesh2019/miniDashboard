import { Component, OnInit } from '@angular/core';
import { DashboardRecord } from 'src/app/models/dashboard-record-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  records: DashboardRecord[] = [
    {
      number: 101,
      dateCreated: '2026-01-12',
      status: 'Accepted',
      propertyReference: 'PROP-001',
      propertyName: 'Lake View Residency',
      postCode: '560103',
      assessor: 'A. Kumar',
      reviewer: 'R. Mehta',
      nextExpectedEvent: '2026-02-01'
    },
    {
      number: 102,
      dateCreated: '2026-01-18',
      status: 'Rejected',
      propertyReference: 'PROP-002',
      propertyName: 'Green Park Homes',
      postCode: '110021',
      assessor: 'S. Singh',
      reviewer: 'N. Verma',
      nextExpectedEvent: '2026-02-05'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
