export class Foto{
  id: number;
  URL: string;
  base64: string;

  constructor(){

  }
  fotoFromJSON(pic: any){
    this.id = pic.Id;
    this.URL= pic.URL;
  }
}
