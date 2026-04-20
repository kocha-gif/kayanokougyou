export interface SalaryDetails {
  type: 'monthly' | 'dailyMonthly';
  experienced: string;
  inexperienced: string;
}

export interface JobPost {
  title: string;
  location: string;
  employmentType: string;
  workingHours: string;
  salaries: SalaryDetails[];
  benefits: string[];
  qualifications: string[];
  description: string[];
  dailyFlow: string[];
}

export interface CompanyInfo {
  name: string;
  kanjiName: string;
  kanaName: string;
  address: string;
  corporateNumber: string;
  phone?: string;
}

export enum NavLinkType {
  HOME = '/',
  ABOUT = '/about',
  RECRUIT = '/recruit',
  CONTACT = '/contact',
}