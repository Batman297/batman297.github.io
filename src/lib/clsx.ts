export default function clsx(
  ...classes: (false | null | undefined | string)[]
) {
  return classes.filter(Boolean).join(" ");
}
