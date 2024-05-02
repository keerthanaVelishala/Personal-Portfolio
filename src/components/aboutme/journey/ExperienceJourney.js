import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
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
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Align Technology, Hyderabad
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Java Backend Developer
          </h6>
          <p>• The application enables comprehensive 3D modeling and visualization of ship structures, facilitating the
            design, planning, and construction processes. The use of detailed 3D models helps in minimizing errors in the shipbuilding process,
            leading to a reduction in costly reworks, improved efficiency, and delays.</p>
          <p>• Played a pivotal role in the design and development of IDS (Invisalign Dental Site) application.
            IDS, a web-based app, is adopted by dentists across 23+ countries, showcasing our global reach.</p>
          <p>• Utilized Spring Boot Framework and Spring Security, to enhance application security and efficiency.</p>
          <p>• Utilized AWS services such as EC2, S3, and Lambda for effective web hosting and
            data management, storage, and backup solutions.</p>
          <p>• Actively participated in the entire software development lifecycle(SDLC), from design
            and analysis to deployment and support, following Agile methodologies and Scrum practices.</p>
          <p>• Demonstrated proficiency in a range of technologies, including Java, PostgreSQL,
            JDBC, Hibernate, and Rest-APIs, showcasing versatility and adaptability.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2020 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Hexagon Capability Center India, Hyderabad
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Software Developer
          </h6>
          <p>• Championed the development and deployment of the Smart 3D application, Hexagon PPM tool.</p>
          <p>• Extensive experience in Java/J2EE server-side development,
            I excel in utilizing both core and advanced Java concepts, including the proficient use
            of Java 8 features like parallel operations, which streamlines multi-threaded application development.</p>
          <p>• Expertise in design patterns including Singleton, MVC, and Factory Design pattern,
            facilitating the structuring of code for scalability, maintainability, and reliability.
            Actively participated in database schema design, crafting views, and functions,
            and formulating complex SQL queries, which enhanced database efficiency and accessibility.</p>
          <p>• Engaged in Agile methodologies like Test-Driven Development (TDD) and
            utilized JIRA for sprint tracking in daily SCRUM meetings, for efficient bug and issue tracking.</p>
          <p>• Developed and maintained CI/CD pipelines using Jenkins, promoting
            streamlined development and deployment processes.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
