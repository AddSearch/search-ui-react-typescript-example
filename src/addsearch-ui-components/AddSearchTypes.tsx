export interface UIInstanceProps {
  searchField: (config: { containerId: string; [key: string]: any }) => void;
  searchResults: (config: { containerId: string; [key: string]: any }) => void;
}
