export interface Input {
  type: string,
  name: string,
  id: string,
  value: string,
  error: Record<string, string>,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string
}