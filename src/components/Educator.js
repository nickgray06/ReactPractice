import React from "react";

var course = [
  {
    name: "Angular",
    educator: "Khalid",
  },
  {
    name: "ReactJS",
    educator: "Roopashri",
  },
  {
    name: "Ajax",
    educator: "Krishna",
  },
];

export const Educator = () => {
  const [crsData, setCrsData] = useState(course);
  return (
    <>
      <h4>UI Courses list</h4>
      <div>
        {crsData.map(function(course) {
          return (
            <div>
              <b>Course:</b>
              {course.name} <b />
              <b>Educator:</b>
              {course.educator}
              <b />
            </div>
          );
        })}
      </div>
    </>
  );
};
