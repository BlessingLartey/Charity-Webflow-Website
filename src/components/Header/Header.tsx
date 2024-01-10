import TopNav from "./TopNav";
import "../Style.css";

function Header() {
  return (
    <>
      <div className="header">
        <p>
          <TopNav />
        </p>
        <h1>Header</h1>
      </div>
    </>
  );
}

export default Header;
