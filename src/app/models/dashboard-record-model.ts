export interface DashboardRecord {
  number: number;
  dateCreated: string;        // ISO date
  status: 'Accepted' | 'Rejected';
  propertyReference: string;
  propertyName: string;
  postCode: string;
  assessor: string;
  reviewer: string;
  nextExpectedEvent: string;  // ISO date
}
