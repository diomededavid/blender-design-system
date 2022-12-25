interface MenuItem {
  label: string;
  url?: string;
  subItems?: MenuItem[];
}

interface Props {
  items: MenuItem[];
}

const DropdownMenu = (props: MenuItem & Props) => {
  const { items } = props;

  return (
    <div className="dropdown">
      {items.map((item) => (
        <>
          <label tabIndex={0} className="btn m-1">
            {item.label}
          </label>
          {item.subItems && (
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {item.subItems.map((subItem) => (
                <li>
                  <a href={subItem.url}>{subItem.label}</a>
                </li>
              ))}
            </ul>
          )}
        </>
      ))}
    </div>
  );
};
export default DropdownMenu;
