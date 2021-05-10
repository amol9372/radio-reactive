import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import SideBar from "../sidebar/sidebar";
import CardBox from "../UI/cardbox";
import HomeDiv from "./homepageflex";
import { makeStyles } from "@material-ui/core/styles";
import LabelHeader from "../labelheader/labelheader";
import Sections from "../section/sections";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "row",
    gap: "2%",
  },
});

const labelAttribute = {
  id: NaN,
  name: "",
  sections: [],
  color: "",
  current: false,
};

const Home = () => {
  const [authRequired, setAuthRequired] = useState(false);
  const baseStyle = useStyles();
  // ==============================

  const [currentLabel, setCurrentLabel] = useState(labelAttribute); // for testing
  const [labelChanged, setLabelChanged] = useState(false);
  // ========================

  // const labelNameHandler = (labelName) => {
  //   setCurrentLabel((label) => ({
  //     ...label,
  //     name: labelName,
  //   }));
  // };

  useEffect(() => {
    if (!localStorage.getItem("user-signed-in")) {
      setAuthRequired(true);
      console.log("[Redirecting to login page]");
    }
  }, []);

  const addLabel = () => {
    // add label
  };

  const labelNameChangeFormSubmit = (label) => {
    // change label name
    console.log("[Label changed]", label);
  };

  const changeCurrentLabel = (label) => {
    setCurrentLabel(label);
    localStorage.setItem("currentLabel", JSON.stringify(label));
    setLabelChanged(!labelChanged);
  };

  return (
    <div className={baseStyle.base}>
      {authRequired && <Redirect to="/login" />}

      <SideBar
        addLabel={addLabel}
        showSections={changeCurrentLabel}
        setCurrentLabel={(label) => setCurrentLabel(label)}
      />
      <HomeDiv flexDirection="column">
        {currentLabel.name && (
          <LabelHeader
            label={currentLabel}
            // labelNameHandler={labelNameHandler}
            prevLabelName={(prevLabelName) =>
              setCurrentLabel((prevLabel) => ({
                ...prevLabel,
                name: prevLabelName,
              }))
            }
            showLabel={changeCurrentLabel}
            labelNameFormSubmit={labelNameChangeFormSubmit}
          />
        )}

        <CardBox
          align="flex-start"
          marginTop="0%"
          flexDirection="column"
          marginLeft="auto"
          padding=".5%"
        >
          <Sections
            currentLabel={currentLabel}
            labelChangeFromSideBar={labelChanged}
          />
        </CardBox>
      </HomeDiv>
    </div>
  );
};

export default Home;

// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
