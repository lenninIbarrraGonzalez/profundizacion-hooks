import { memo } from "react";

//Con el memo no se renderiza cuando el padre cambia sus props
// eslint-disable-next-line react/display-name
export const Small = memo(({ value }) => {
  console.log("me volví a generar");
  return (
    <>
      <small>{value}</small>
    </>
  );
});
