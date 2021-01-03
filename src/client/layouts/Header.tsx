import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header: React.FC = () => (
    <div>
        <StyledLink to='/'>top</StyledLink>
        <StyledLink to='/about'>about</StyledLink>
        <StyledLink to='/settings'>settings</StyledLink>
    </div>
)

export default Header

const StyledLink = styled(Link)`
    & + & {
        margin-left: 20px;
    }
`
