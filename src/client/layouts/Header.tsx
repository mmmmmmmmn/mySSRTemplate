import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => (
    <div>
        <Link to='/'>top</Link>
        <Link to='/about' style={{ marginLeft: 10 }}>
            about
        </Link>
        <Link to='/settings' style={{ marginLeft: 10 }}>
            settings
        </Link>
    </div>
)

export default Header
