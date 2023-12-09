export interface Question {
  id: number;
  title: string;
  body: string;
  htmlBody: string;
  upvotes: number;
  downvotes: number;
  createdAt: Date;
  lastModified: Date | null;
  authorId: number;
  topicId: number;
}
