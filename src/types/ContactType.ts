type ContactType = {
  created_at: string;
  deleted_at?: string | null;
  email: string;
  id?: string;
  message: string;
  name: string;
  phone: string;
  status: 'read' | 'unread';
  updated_at?: string | null;
}

export default ContactType;