import { useNavigate } from "react-router-dom";



export default function AuthLink({ href, children }) {
    const navigate = useNavigate();

  return (
    <a  onClick={e => navigate(href)} className="auth-link">
      {children}
    </a>
  );
}

