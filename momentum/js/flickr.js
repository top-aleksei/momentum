import { randomNum } from "./bg.js";
import { flickrTag } from "./settings.js";
import { vocabulary } from "./EnRu.js";
import { getTimeOfDay } from "./getTimeOfDay.js";

const defGallery = {
  morning: "72157720069530982",
  afternoon: "72157720111881805",
  evening: "72157720111880160",
  night: "72157720062587146",
};

export async function getFlickr() {
  let tag = flickrTag.value;
  if (flickrTag.value == "") {
    tag = defGallery[vocabulary.en.partOfDay[getTimeOfDay()]];
    let url = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=e1308216bb31a5f90e5fe43b4cd51fdc&gallery_id=${tag}&extras=url_h&format=json&nojsoncallback=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.photos.photo[randomNum - 1].url_h;
  } else {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e1308216bb31a5f90e5fe43b4cd51fdc&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;

    const response = await fetch(url);
    const data = await response.json();
    const totalImg = data.photos.total;
    const perPage = data.photos.perpage;

    if (totalImg > 0) {
      let qty = totalImg < perPage ? totalImg : perPage;
      let n = getRandomNumFlickr(qty);
      console.log(tag);
      return data.photos.photo[n].url_l;
    } else {
      flickrTag.value = "cat";
      tag = "cat";
      let res = getFlickr();
      return res;
    }
  }
}

function getRandomNumFlickr(qty) {
  return Math.floor(Math.random() * qty + 1);
}
