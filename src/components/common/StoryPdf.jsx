import React from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import pdfHeroImage from "../../assets/images/png/pdf/pdfHero.png"; // Replace with the actual image path

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const StoryPdf = () => {
  const styles = {
    header: {
      fontSize: 40,
      bold: true,
      marginBottom: 16,
    },
    image: {
      width: 150,
      height: 150,
    },
  };

  var dd = {
    content: [
      {
        image: ""
      },
      {
        text: "Condors of Callisto",
        style: "header", // Use the style as a string
      },
      {
        text: "A Dance of Destiny",
        fontSize: 20,
        color: "#a2a9b9",
        opacity: 1,
      },
    ],
    styles: styles,
    
  };

  const clickHandler = () => {
    const pdfDoc = pdfMake.createPdf(dd);
    pdfDoc.open();
  };

  return (
    <div>
      <button onClick={clickHandler}>Generate PDF</button>
    </div>
  );
};

export default StoryPdf;
