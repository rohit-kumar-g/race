import React from "react";
import { VisitStyled } from "../styles/AllStyles";
const VisitUs = () => {
  return (
    <VisitStyled>
      <div className="con_1">
        <div className="visit_us_cont_2">
          VisitUs
          <div className="week_cont_2">
            <div className="days">
              <h2>Monday</h2>
              <h2>Tuesday</h2>
              <h2>Wednesday</h2>
              <h2>Thursday</h2>
              <h2>Friday</h2>
              <h2>Saturday</h2>
              <h2>Sunday</h2>
            </div>
            <div className="time">
              <h2>10:00am-7:00pm</h2>
              <h2>10:00am-7:00pm</h2>
              <h2>10:00am-7:00pm</h2>
              <h2>10:00am-7:00pm</h2>
              <h2>10:00am-7:00pm</h2>
              <h2>10:00am-7:00pm</h2>
              <h2>closed</h2>
            </div>
          </div>
        </div>
        <div className="map_con_3">
          <iframe
          title="jhngkhdgnkfhlk"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.562699476543!2d-95.55933436101662!3d29.674461575215595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c2aa2143f7ad%3A0x33e91e21a0d1eb30!2s10109%20Bissonnet%20St%2C%20Houston%2C%20TX%2077036%2C%20USA!5e0!3m2!1sen!2sin!4v1688978622796!5m2!1sen!2sin"
            className="map_visit_us"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </VisitStyled>
  );
};
export default VisitUs;
