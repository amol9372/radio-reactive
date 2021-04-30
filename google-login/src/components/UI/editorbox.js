import MyButton from "./button";
import Card from "./card";
import Button from "@material-ui/core/Button";

export const Editor = (props) => {
  const cancelEdit = (id) => {
    props.onCancelEdit(id);
  };

  return (
    <Card width="97%" flexGap="7px" flexDirection="row">
      <MyButton backgroundColor="grey" text="Save" type="submit" />
      <Button
        color="primary"
        style={{ color: "white" }}
        size="small"
        onClick={() => cancelEdit(props.taskId)}
      >
        Cancel
      </Button>
    </Card>
  );
};
