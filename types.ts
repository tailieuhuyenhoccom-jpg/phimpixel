export interface Step {
  title: string;
  content: string;
  image?: string; // Optional image for visual aid
}

export interface Lesson {
  id: number;
  title: string;
  summary: string;
  icon: string; // Emoji or icon identifier
  steps: Step[];
}
