import { memo } from "react";
// eslint-disable-next-line react/display-name, react/prop-types
export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volví a generar");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
