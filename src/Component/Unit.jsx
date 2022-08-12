import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function Unit({ unit }) {
  return (
    <>
      <ButtonGroup
        size="small"
        variant="text"
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => unit("metric")}>Celsius</Button>
        <Button onClick={() => unit("imperial")}>Fahrenheit</Button>
        <Button onClick={() => unit("standard")}>Kelvin</Button>
      </ButtonGroup>
    </>
  );
}
