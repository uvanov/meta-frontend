// Import local modules
import { CEF } from '../CEF';

// Change Window structure
declare global {
  interface Window {
    CEF: typeof CEF
  }
}

