// 'id' should be unique (start from 001)
// Do not insert comma in number

const schema = {
  id: "",
  name: "",
  subName: "",
  endangeredType: "",
  weight: {
    value: "",
    unit: "",
  },
  height: {
    value: "",
    unit: "",
  },
  lifeSpan: {
    value: "",
    unit: "",
  },
  numberLeft: {
    value: "",
    unit: "",
  },
  endangeredSince: "",
  region: "",
  pngImg: "",
  mainImg: "",
  story: [
    // repeat for all chapters
    {
      title: "",
      body: "",
      img: "",
    },
  ],
};
