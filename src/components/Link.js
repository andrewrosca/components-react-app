import classnames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classnames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName // if (currentPath === to) { return activeClassname }
  );

  const handleClick = (event) => {
    // if user holds command and click link open in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    // else change content on current page
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
