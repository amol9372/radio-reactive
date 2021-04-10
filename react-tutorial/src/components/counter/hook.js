import React, {
  Component,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import WithClass from "../hocs/counterWrapper";
import FiberNewTwoToneIcon from "@material-ui/icons/FiberNewTwoTone";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import ApplContext from "../context/context";

function Hook(props) {
  const [count, setCount] = useState(0);
  const [badge, setBadge] = useState("badge badge-primary m-2");
  const applContext = useContext(ApplContext);

  const refcount = useRef(0);

  function incrementCount() {
    if (count === props.limit) {
      setBadge("badge badge-warning m-2");
    }
    refcount.current = refcount.current + 1;
    setCount(count + 1);
  }

  return (
    <WithClass className="hooks">
      <button className="btn btn-secondary m-2" onClick={incrementCount}>
        Press It
      </button>
      <label className={badge}>{count}</label>
      <label className="badge badge-primary m-2">{refcount.current}</label>
      <Badge badgeContent={refcount.current} color="error">
        <MailIcon />
      </Badge>
      {applContext.authentication ? (
        <p> Authenticated </p>
      ) : (
        <p> Please Login </p>
      )}
    </WithClass>
  );
}

export default Hook;
