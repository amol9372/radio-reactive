import { useState, useRef } from "react";
import Card from "../UI/card";
import TaskFieldBox from "../task/taskfieldbox";
import React from "react";
import SectionTitle from "./sectiontitle";

const SectionCard = (props) => {
  const prevSectionName = useRef(props.section);

  const nameChangeHandler = (name) => {
    props.setSectionName(name);
  };

  const setPrevSection = () => {
    props.prevSection(prevSectionName.current);
  };

  const nameFormSubmit = () => {
    props.nameFormSubmit();
  };

  const addTask = () => {
    props.addTask();
  };

  return (
    <Card width="300px" flexGap="5px">
      <SectionTitle
        name={props.section.name}
        sectionNameChangeHandler={nameChangeHandler}
        nameFormSubmit={nameFormSubmit}
        showPrevSection={setPrevSection}
      />
      <TaskFieldBox tasks={[]} addTask={addTask} />
    </Card>
  );
};

export default SectionCard;
