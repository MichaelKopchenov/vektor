import './Content.css';

export default function Content({ children }) {
  return (
    <div className="section__content">
      {children}
    </div>
  );
};