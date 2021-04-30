import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import SideBar from "../sidebar/sidebar";
import CardBox from "../UI/cardbox";
import HomeDiv from "./homepageflex";
import SectionCard from "../section/sectioncard";
import { makeStyles } from "@material-ui/core/styles";
import LabelHeader from "../labelheader/labelheader";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "row",
    gap: "2%",
  },
});

const Home = () => {
  const [authRequired, setAuthRequired] = useState(false);
  const [section, setSection] = useState(""); // for testing
  const [label, setLabel] = useState("Label 1"); // for testing
  const baseStyle = useStyles();

  const sectionNameChangeHandler = (name) => {
    setSection({ name: name });
  };

  const labelNameHandler = (labelName) => {
    setLabel(labelName);
  };

  const setPrevSection = (prevSection) => {
    setSection(prevSection);
  };

  const nameFormSubmit = () => {
    console.log("[Submit Section Name change]");
    // Api for backend
  };

  useEffect(() => {
    if (localStorage.getItem("user-signed-in") === "true") {
      setTimeout(function () {
        setSection({ name: "Section From timeout" });
        console.log("[User Already Signed in]");
      }, 1000);
    } else {
      setAuthRequired(true);
      console.log("[Redirecting to login page]");
    }
  }, []);

  const onAddTask = () => {
    // add task
  };

  const addLabel = () => {
    // add task
  };

  const labelNameFormSubmit = () => {
    // change label name
  };

  const showPrevLabelName = (prevLabelName) => {
    setLabel(prevLabelName);
  };

  return (
    <div className={baseStyle.base}>
      {authRequired && <Redirect to="/login" />}

      <SideBar labels={[]} addLabel={addLabel} />
      <HomeDiv flexDirection="column">
        <LabelHeader
          labelName={label}
          labelNameHandler={labelNameHandler}
          prevLabelName={showPrevLabelName}
          labelNameFormSubmit={labelNameFormSubmit}
        />
        <CardBox align="flex-start" marginTop="1%">
          {section && (
            <SectionCard
              section={section}
              setSectionName={sectionNameChangeHandler}
              prevSection={setPrevSection}
              nameFormSubmit={nameFormSubmit}
              addTask={onAddTask}
            />
          )}
        </CardBox>
      </HomeDiv>
    </div>
  );
};

export default Home;

// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
