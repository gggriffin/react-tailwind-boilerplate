import { NavButton } from "../NavButton/NavButton";

export const NavBar = () => {
  return (
    <div className="w-100 bg-white">
      <div className="flex w-100 h-16 items-center justify-around text-gray-300">
        <NavButton title="FAQ" />
        <NavButton title="Volunteer" />
        <NavButton title="Stainbrook Foundation" />
      </div>
    </div>
  );
};
