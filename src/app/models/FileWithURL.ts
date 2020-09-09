export default class FileWithURL {
  #f: File;
  #url: string;

  constructor(f: File) {
    this.#f = f;
    this.#url = URL.createObjectURL(f);
  }

  get url() {
    return this.#url;
  }

  get f() {
    return this.#f;
  }

  release() {
    URL.revokeObjectURL(this.#url);
  }
}