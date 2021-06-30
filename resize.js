async function process() {
  // console.log('here2')
  // const file = document.querySelector("#upload").files[0];

  const response = await fetch("https://s3-media1.fl.yelpcdn.com/bphoto/zSoHT345czU1ny50m3hj-A/o.jpg");

  const blob = await response.blob();
  const file = new File([blob], "restaurant.jpg");
  console.log({file})

  if(!file) return;

  const reader = new FileReader();
  reader.readAsDataURL(file);
  console.log({file})

  reader.onload = (event) => {
    console.log('here')
    const imgElement = document.createElement("img");

    imgElement.src = event.target.result;

    document.querySelector("#input").src = event.target.result;

    imgElement.onload = (e) => {
      const canvas = document.createElement("canvas");

      const MAX_WIDTH = 300;

      const scaleSize = MAX_WIDTH / e.target.width;

      canvas.width = MAX_WIDTH;

      canvas.height = MAX_WIDTH;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

      const srcEncoded = ctx.canvas.toDataURL(e.target.src, "image/jpeg");
      

      document.querySelector("#output").src = srcEncoded;


    }
  }

}

document.querySelector("#upload").onCli