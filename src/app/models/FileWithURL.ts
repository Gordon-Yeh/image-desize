export class FileWithURL {
  f: File;
  url: string;

  constructor(f: File) {
    this.f = f;
    this.url = URL.createObjectURL(f);
  }

  release() {
    URL.revokeObjectURL(this.url);
  }
}