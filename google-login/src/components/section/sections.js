import React, { useEffect, useState } from "react";
import SectionCard from "./sectioncard";
import { makeStyles } from "@material-ui/core/styles";

const sectionAttribute = {
  id: NaN,
  name: "",
  tasks: [
    {
      id: NaN,
      name: "",
      priority: "",
      assigned: "",
      completed: false,
    },
  ],
};

const useStyles = makeStyles({
  root: {
    columnCount: 3,
    padding: "5px",
    display: "inline-block",
    columnGap: "normal",
    textAlign: "left",
  },
});

const Sections = (props) => {
  const sectionCardsStyle = useStyles();
  const [sections, setSections] = useState([sectionAttribute]);

  const nameFormSubmit = (section) => {
    console.log("[Submit Section Name change]", section);
  };

  const onAddTask = () => {
    // Api for backend
  };

  useEffect(() => {
    if (props.currentLabel) {
      setSections(s);
    }
    return () => setSections([]);
  }, [props.labelChangeFromSideBar]);

  useEffect(() => {
    if (props.currentLabel) {
      setSections(s);
    }
    return () => setSections([]);
  }, []);

  const toggleTaskStatus = (tasks, id) => {
    console.log(tasks, id);

    const sectionsUpdated = sections.map((section) => {
      const sectionNew = { ...section };
      if (section.id === id) {
        sectionNew.tasks = tasks;
      }

      return sectionNew;
    });

    setSections(sectionsUpdated);

    // backend Api
  };

  return (
    <div className={sectionCardsStyle.root}>
      {sections.length === 0 && <div>No Sections created</div>}
      {sections.map((section) => {
        return (
          <SectionCard
            key={section.id}
            section={section}
            nameFormSubmit={nameFormSubmit}
            addTask={onAddTask}
            tasks={section.tasks}
            toggleTaskStatus={toggleTaskStatus}
          />
        );
      })}
    </div>
  );
};

export default Sections;
