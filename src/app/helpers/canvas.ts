function getInnerWidth(e : HTMLElement) : number {
  var styles = window.getComputedStyle(e);
  var padding = parseFloat(styles.paddingLeft) +
    parseFloat(styles.paddingRight);
  return e.clientWidth - padding;
}

export function drawImage(canvas : HTMLCanvasElement, url : string, resize=true) : Promise<void> {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;

    img.onload = function() {
      if (resize) {
        // set canvas to width for the parents element (not including padding/margin)
        var dWidth = getInnerWidth(canvas.parentElement);
        var dHeight = dWidth / img.width * img.height;
        // image should not exceed a portion of the screen
        if (dHeight > window.innerHeight * 0.8) {
          dHeight = window.innerHeight * 0.8;
          dWidth = dHeight / img.height * img.width;
        }
      } else {
        var dWidth = img.width;
        var dHeight = img.height;
      }
      
      canvas.width = dWidth;
      canvas.height = dHeight;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img,
        0, 0,
        img.width, img.height,
        0, 0,
        dWidth, dHeight
      );

      resolve();
    }
  });
}

export function toJPEG(canvas : HTMLCanvasElement, quality : number) : Promise<Blob> {
  return new Promise((resolve, reject) => {
    if (quality < 0 || quality > 100)
      reject(new Error(`jpeg quality should be between 0 to 100, got ${quality}`));

    canvas.toBlob(resolve, 'image/jpeg', quality/100);
  })
}