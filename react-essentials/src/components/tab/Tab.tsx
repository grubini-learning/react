import "./Tab.css";

export const Tab: React.FC<
  {
    active: boolean;
    title: string;
    onClick: (subject: string) => void;
  } & React.PropsWithChildren
> = ({ active, title = "", onClick }) => {
  const renderTitle = title[0].toUpperCase() + title.substring(1);

  return (
    <li>
      <button className={active ? "active" : ""} onClick={() => onClick(title)}>
        {renderTitle}
      </button>
    </li>
  );
};
