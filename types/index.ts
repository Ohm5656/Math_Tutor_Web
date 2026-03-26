export type CourseCategory =
  | "ทั้งหมด"
  | "ประถม"
  | "มัธยมต้น"
  | "มัธยมปลาย"
  | "เตรียมสอบเข้า"
  | "ตะลุยโจทย์";

export interface TutorProfile {
  id: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  expertise: string[];
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface CourseLesson {
  title: string;
  summary: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  level: string;
  category: Exclude<CourseCategory, "ทั้งหมด">;
  shortDescription: string;
  description: string;
  price: number;
  duration: string;
  lessons: number;
  featured?: boolean;
  highlight: string;
  suitableFor: string[];
  outcomes: string[];
  curriculum: CourseLesson[];
  tags: string[];
  tutorId: string;
  faq: CourseFaq[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  result: string;
}

export interface SiteFaq {
  question: string;
  answer: string;
}

export interface PaymentSessionPayload {
  courseId: string;
  courseSlug: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  gradeLevel: string;
  notes?: string;
}

export interface PaymentSessionResponse {
  paymentUrl: string;
  sessionId: string;
  expiresAt: string;
}
