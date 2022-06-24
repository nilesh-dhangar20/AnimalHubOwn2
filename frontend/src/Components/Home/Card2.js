import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import ReactWhatsapp from "react-whatsapp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Style/Card2.css";
const Card = (props) => {
  console.log(props.gender);
  return (
    <div className="card_div ">
      <MDBCard style={{ maxWidth: "90vw" }} className="card_div_mdb2 ">
        <MDBCardImage
          src={props.image}
          position="top"
          alt="..."
          className="card_div_image2  img-fluid"
        />
        <MDBCardBody>
          <MDBCardTitle className="rate_and_milk">
            <div> ₹ {props.rate}</div>
            <div>
              {props.gender === "female" ? (
                <span>{props.milkCurrent} लीटर दूध</span>
              ) : null}
            </div>
          </MDBCardTitle>
          <MDBCardText className="para">
            यह पशु {props.breed} {props.animalCategory} हे | ये
            {" " + props.caughNumber} ब्यात में हे और अभी{" "}
            {props.milkCurrent + " "}
            लीटर दूध देती ह |यह गर्भवती {props.isPregnent ? "हे" : "नहीं हे"} |
            एक हफ्ते पहले ब्यायी हे | इसके साथ पाडी{" "}
            {props.currentlyCaughOrNot ? "हे" : "नहीं हे"}|
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter border="secondary" className="card_bottons_div">
          <div className="owner_info">
            <AccountCircleIcon
              style={{ width: 25, height: 25 }}
              className="ms-0"
            />
            <p>Nilesh Ji</p>
          </div>

          <div className="contact_links">
            <div className="call_link  text-center">
              <a href="tel:9617266124" className="me-3">
                <button className="btn btn-primary">
                  <CallIcon />
                </button>
              </a>
            </div>
            <div className="whatsapp_link">
              <ReactWhatsapp
                number="+91-8817897211"
                message="Hello World!!!"
                className="btn btn-success"
              >
                <WhatsAppIcon />
              </ReactWhatsapp>
            </div>
          </div>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};
export default Card;
