export interface Myboscase {
  id?: string;
  case_number?: Number;
  case_type?: string;
  added_date?: string;
  due_date?: string;
  priority?: string;
  status?: string;
  job_area?: string;
  category?: string;
  asset_category?: string;
  apartment?: string;
  contacts?: string;
  asset?: string;
  assigned_to?: string;
  email_subject?: string;
  email_description?: string;
  notes?: string;
  add_to_report?: boolean;
  duplicate_case?: boolean;
  logged_by?: string;
  images?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export type CaseStatus = 'completed' | 'pending' | 'failed';
