import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://cdn.xxl.thumbs.canstockphoto.com/about-me-written-on-paper-note-vector-illustration-vector-clipart_csp94595708.jpg" alt="" />
        <p>
            Lorem, ipsum dolor sit amet consectetur 
             adipisicing elit. Quos incidunt 
             voluptatum natus!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
         <i className="sidebarIcon fab fa-twitter-square"></i>
         <i className="sidebarIcon fab fa-pinterest-square"></i>
         <i className="sidebarIcon fab fa-instagram-square"></i>
         <i className="sidebarIcon fab fa-facebook-square"></i>
      </div>
      </div>
    </div>
  );
}
