import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src="https://wallpaper.dog/large/10750906.jpg" 
        alt=""
         />
        <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet vel corporis eligendi! Tempore neque esse est maiores eius
        soluta fugit eaque? Culpa quaerat sit optio fugit quis cum dolore repellendus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet vel corporis eligendi! Tempore neque esse est maiores eius
        soluta fugit eaque? Culpa quaerat sit optio fugit quis cum dolore repellendus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet vel corporis eligendi! Tempore neque esse est maiores eius
        soluta fugit eaque? Culpa quaerat sit optio fugit quis cum dolore repellendus.
      </p>
    </div>
  );
}
