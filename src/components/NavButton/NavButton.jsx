export const NavButton = (props) => {
  const { title } = props;
  return (
    <button className="rounded text-xs py-3 px-5  hover:bg-gray-800 hover:text-white min-w-min">
      {title}
    </button>
  );
};
