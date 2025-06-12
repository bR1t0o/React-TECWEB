import { Link, useNavigate } from 'react-router-dom';

export default function Menu() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <nav style={{
            backgroundColor: '#333',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
                <Link to="/lista" style={{ color: '#fff', textDecoration: 'none' }}>Tarefas</Link>
            </div>
            <button
                onClick={handleLogout}
                style={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                }}
            >
                Logout
            </button>
        </nav>
    );
}
