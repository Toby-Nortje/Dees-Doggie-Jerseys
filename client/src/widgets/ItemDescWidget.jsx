import SimpleTabs from "components/SimpleTabs.jsx";

const ItemDescWidget = () => {
  const tabs = [
    {
      header: "Sizing Guide",
      content: <h6>Sizing Guide</h6>,
    },
    {
      header: "Deliveries",
      content: <h6>Deliveries</h6>,
    },
    {
      header: "Returns",
      content: <h6>Returns</h6>,
    },
  ];
  return (
    <div>
      <SimpleTabs tabs={tabs} />
    </div>
  );
};

export default ItemDescWidget;
