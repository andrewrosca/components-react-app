import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("click!");
  };

  return (
    <div>
      <div>
        <Button className="mb-5" primary outline onClick={handleClick}>
          Click me!!
        </Button>
        <Button secondary>
          <GoBell className />
          Click me!!
        </Button>
        <Button success rounded outline>
          Click me!!
        </Button>
        <Button warning outline>
          <GoDatabase />
          Click me!!
        </Button>
        <Button danger>
          <GoCloud />
          Click me!!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
