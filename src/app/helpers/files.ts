export function download(content, outputName : string) {
  var a = document.createElement('a');
  a.download = outputName;
  let url = URL.createObjectURL(content);
  a.href = url;
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}