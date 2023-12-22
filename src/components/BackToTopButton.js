import React, { useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const BackToTopButton = () => {
  useEffect(() => {
    const scrollFunction = () => {
      const mybutton = document.getElementById("btn-back-to-top");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.onscroll = () => scrollFunction();

    return () => {
      window.onscroll = null; 
    };
  }, []);

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <MDBBtn
      onClick={backToTop}
      id='btn-back-to-top'
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "none",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#1bc4ca",
        fontSize: "36px",
        textAlign: "center",
        lineHeight: "50px",
      }}
      className='btn-floating'
    >
      {"\u2191"}
    </MDBBtn>
  );
};

export default BackToTopButton;