export interface Myboscase {
  id?: string
  case_number?: Number
  case_type?: string
  added_date?: Date
  due_date?: Date
  priority?: string
  status?: string
  job_area?: string
  category?: string
  asset_category?: string
  assigned_to?: string
  email_subject?: string
  email_description?: string
  notes?: string
  logged_by?: string
  createdAt?: Date
  updatedAt?: Date
}

export type CaseStatus = 'completed' | 'pending' | 'failed'
