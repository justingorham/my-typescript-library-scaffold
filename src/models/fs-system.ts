export interface File {
  name: string;
  size: number;
  content: string;
  permission: string;
}

export interface Directory {
  name: string;
  files: File[];
  directories: Directory[];
}
