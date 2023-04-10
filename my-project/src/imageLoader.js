export const loadImageDict = async (data) => {
  const imageDict = {};

  for (const item of data) {
    const { id, image } = item;
    console.log(`Loading image for ID ${id}: ${image}`);
    const imageUrl = new URL(`./components/res/photos/${image}`, import.meta.url).href;
    console.log(`Imported image for ID ${id}:`, imageUrl);
    imageDict[id] = imageUrl;
  }

  return imageDict;
};

export const loadImageMap = async (folder, compressed = false) => {
  const importGlobUncompressed = import.meta.glob('./components/res/photos/*/*.{png,jpg,jpeg,svg,gif}');
  const importGlobCompressed = import.meta.glob('./components/res/photos/*/compressed/*.{png,jpg,jpeg,svg,gif}');
  const importGlob = compressed ? importGlobCompressed : importGlobUncompressed;

  const images = await Promise.all(
    Object.entries(importGlob).map(async ([path, resolver]) => {
      if (path.includes(folder)) {
        const imageName = path.match(/[^/]+(?=\.[^.]+$)/)[0];
        const module = await resolver();
        const imageUrl = module.default;

        return { name: imageName, url: imageUrl };
      }
      return null;
    })
  );

  const imageMap = images.reduce((acc, curr) => {
    if (curr) {
      acc[curr.name] = curr.url;
    }
    return acc;
  }, {});

  return imageMap;
};
