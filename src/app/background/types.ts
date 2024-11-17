// types.ts

export type EduCard = {
  id: number;
  title: string;
  degree: string;
  detail: string;
  year: string;
};

export type ExpCard = {
  id: number;
  title: string;
  role: string;
  url: string;
  desc: string;
  year: string;
  location: string;
};

// This type is used to structure the API data returned as an array with both education and experience sections
export type BackgroundData = {
  eduCards: EduCard[];
  expCards: ExpCard[];
};
