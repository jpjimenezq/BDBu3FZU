export interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface AttributeField {
  name: string;
  value: string | number;
  type: 'text' | 'number' | 'email';
}

export interface Contact {
  id: string;
  name: string;
  status: string;
  assignedTo?: string;
}