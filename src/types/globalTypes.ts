export interface IBook {
  _id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  img: string;
  review?: [];
}
