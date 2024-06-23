var faces = {
    img1: {
        name: "DigiFacei1",
        nature: 0,
        source: "/dataset/DigiFacei1 Background Removed.png",
        noise: "/noise/NoisePattern1.jpeg"
    }, img2: {
        name: "DigiFacei2",
        nature: 0,
        source: "/dataset/DigiFacei2 Background Removed.png",
        noise: "/noise/NoisePattern2.jpeg"
    }, img3: {
        name: "DigiFacei3",
        nature: 0,
        source: "/dataset/DigiFacei3 Background Removed.png",
        noise: "/noise/NoisePattern3.jpeg"
    }, img4: {
        name: "DigiFacei4",
        nature: 0,
        source: "/dataset/DigiFacei4 Background Removed.png",
        noise: "/noise/NoisePattern4.jpeg"
    }, img5: {
        name: "DigiFacei5",
        nature: 0,
        source: "/dataset/DigiFacei5 Background Removed.png",
        noise: "/noise/NoisePattern5.jpeg"
    }, img6: {
        name: "StyleGANi1",
        nature: 1,
        source: "/dataset/StyleGANi1 Background Removed.png",
        noise: "/noise/NoisePattern6.jpeg"
    }, img7: {
        name: "StyleGANi2",
        nature: 1,
        source: "/dataset/StyleGANi2 Background Removed.png",
        noise: "/noise/NoisePattern7.jpeg"
    }, img8: {
        name: "StyleGANi3",
        nature: 1,
        source: "/dataset/StyleGANi3 Background Removed.png",
        noise: "/noise/NoisePattern8.jpeg"
    }, img9: {
        name: "StyleGANi4",
        nature: 1,
        source: "/dataset/StyleGANi4 Background Removed.png",
        noise: "/noise/NoisePattern9.jpeg"
    }, img10: {
        name: "StyleGANi5",
        nature: 1,
        source: "/dataset/StyleGANi5 Background Removed.png",
        noise: "/noise/NoisePattern10.jpeg"
    }, img11: {
        name: "FFHQi1",
        nature: 2,
        source: "/dataset/FFHQi1 Background Removed.png",
        noise: "/noise/NoisePattern11.jpeg"
    }, img12: {
        name: "FFHQi2",
        nature: 2,
        source: "/dataset/FFHQi2 Background Removed.png",
        noise: "/noise/NoisePattern12.jpeg"
    }, img13: {
        name: "FFHQi3",
        nature: 2,
        source: "/dataset/FFHQi3 Background Removed.png",
        noise: "/noise/NoisePattern13.jpeg"
    }, img14: {
        name: "FFHQi4",
        nature: 2,
        source: "/dataset/FFHQi4 Background Removed.png",
        noise: "/noise/NoisePattern14.jpeg"
    }, img15: {
        name: "FFHQi5",
        nature: 2,
        source: "/dataset/FFHQi5 Background Removed.png",
        noise: "/noise/NoisePattern15.jpeg"
    }
}

function getImg() {
    var keys = Object.keys(faces);
    var key = keys[keys.length * Math.random() << 0];
    var taken = faces[key];
    delete faces[key];
    return taken;
};

export { getImg }