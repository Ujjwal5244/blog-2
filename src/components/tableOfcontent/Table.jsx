import "./Table.css";

export function Table() {
  return (
    <div className="table-of-contents">
      <nav className="toc-nav">
        <a href="#introduction" className="toc-link">
          • Introduction
        </a>
        <a href="#business-structure" className="toc-link">
          • Choosing the best structure
        </a>
        <a href="#work-together" className="toc-link">
          • How to work well together
        </a>
        <a href="#legal" className="toc-link">
          • What legal agreements you need
        </a>
        <a href="#resources" className="toc-link">
          • More resources
        </a>
      </nav>
    </div>
  );
}
