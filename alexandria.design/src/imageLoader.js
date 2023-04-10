export const loadImages = async (projects) => {
    const imageImports = await Promise.all(
      projects.map(async (project) => {
        const { id, image } = project;
        const module = await import(`./components/res/photos/${image}`);
        return { id, default: module.default };
      })
    );
  
    const imageMap = imageImports.reduce((acc, curr) => {
      acc[curr.id] = curr.default;
      return acc;
    }, {});
  
    return imageMap;
  };

  export const loadAllImages = async (folder) => {
    const imagesModule = await import(`./components/res/photos/${folder}/index`);
    return imagesModule;
  };