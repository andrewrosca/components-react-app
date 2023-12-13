import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Can I use React on a Project?",
      content:
        "You can use React on any Project you would like! You can use React on any Project you would like!",
    },
    {
      id: 2,
      label: "Can I use JavaScript on a Project?",
      content:
        "You can use React on any Project you would like! You can use React on any Project you would like!",
    },
    {
      id: 3,
      label: "Can I use CSS on a Project?",
      content:
        "You can use React on any Project you would like! You can use React on any Project you would like!",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
