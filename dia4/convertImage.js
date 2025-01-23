const imageToAscii = require("image-to-ascii");

imageToAscii("dia4\greenDay.jpgs", {
    colored: true,
    pxWidth: 0.1,
    charset: "@%#*+=-:. "
}, (err, converted) => {
    if (err) {
        console.error(err);
    } else {
        console.log(converted);
    }
});