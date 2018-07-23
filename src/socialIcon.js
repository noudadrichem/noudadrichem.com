import React from 'react'
import styled, { css } from 'styled-components';

import github from './assets/icons/logo-github.svg'
import codepen from './assets/icons/logo-codepen.svg'
import instagram from './assets/icons/logo-instagram.svg'
import npm from './assets/icons/logo-npm.svg'

const icons = {
  github,
  codepen,
  instagram,
  npm
}

const Icon = styled.img`
  width: 24px;
  height: 24px;
  transition: 200ms ease;
  user-select: none;

  ${props => props.light && css`
    filter: invert(100%);
  `}

  &:hover {
    transform: scale(1.2);
  }
`

export default ({ name, link, light }) => (
  <a href={link} target='blank'><Icon light={light} className={name} src={icons[name]}/></a>
)
