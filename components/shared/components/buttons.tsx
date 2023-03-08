export function Button({
  label,
  color,
  ...rest
}: {
  label: string;
  color: "primary" | "secondary";
  [x: string]: any;
}) {
  let classNm = "btn btn__primary";

  switch (color) {
    case "primary":
      classNm = "btn btn__primary";
      break;

    case "secondary":
      classNm = "btn btn__secondary";
      break;
    default:
      break;
  }

  return (
    <>
      <div className={classNm} {...rest}>
        <p>{label}</p>
      </div>
    </>
  );
}
