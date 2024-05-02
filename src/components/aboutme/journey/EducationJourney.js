import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Qualification Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2002 - 2012"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            SECONDARY SCHOOL CERTIFICATE
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Samatha High School, Warangal
          </h4>
          <p>
            Studied here from Class 1 to 10th as a part of secondary school
            Certificate and gain GPA 9.8 in my SSC Examination.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2012 - 2014"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Board of Intermediate
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Narayana Junior College, Hyderabad
          </h4>
          <p>
            Studied intermediate in MPC from Narayana Junior College and gain 974/1000 in Board exam.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2014 - 2018"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">Under Graduation</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Osmania University, Hyderabad
          </h4>
          <p>
            Studied Bachelor of Technology degree in Mechanical Engineering
            field from Osmania University and gain CGPA 8.34.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
            date="2023 - "
            iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">Graduation</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            University of South Florida, Tampa
          </h4>
          <p>
            Studying Master's in Computer Systems Analysis.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
