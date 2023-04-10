const colors = ['#ee4b38', '#31a676', '#77cdd7', '#f1bc3e'];

export const getRandomColor = () => {
    const rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
};