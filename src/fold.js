import React, {Component} from 'react';
import styled from 'styled-components';
import SocialIcon from './socialIcon'

const Container = styled.div `
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding: 0 24px;
  // background: var(--background-color);
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;

  @media screen and (max-width: 1023px ) {
    display: block;
    padding: 0 16px;
    padding-top: 20vh;
    height: ${window.innerHeight};
  }
`

const LineNumbers = styled.div `
  font-size: 12px;
  color: var(--text-color);
  // color: #2B334D;
  line-height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  user-select: none;
  padding-left: 4px;
`

const MainTitle = styled.h1 `
  font-size: 64px;
  color: var(--text-color);
  font-weight: 300;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 764px) {
    font-size: 32px;
  }
  @media screen and (max-width: 421px) {
    font-size: 24px;
  }
`

const BackdropRectangle = styled.div `
  background: var(--backdrop-color);
  max-width: 784px;
  width: 40vw;
  height: 552px;
  position: absolute;
  left: 400px;
  z-index: -1;

  @media screen and (max-width: 767px ) {
    width: 60vw;
    left: 64px;
    top: 64px;
    transform: translateY(-150px);
    height: 300px;
  }
`

const divider = `
  content: '';
  width: 2px;
  position: absolute;
  background-color: #f3f3f3;
  height: calc(${window.innerHeight / 2}px - 192px);
  left: 10px;
  border-radius: 2px;
`

const Social = styled.div `
  position: absolute;
  top: 0px;
  right: 72px;
  display: flex;
  align-items: center;
  height: ${window.innerHeight}px;

  &:before {
    top: 72px;
    ${divider}
    z-index: -2;
  }

  &:after {
    bottom: 72px;
    ${divider}
    z-index: -2;
  }

  @media screen and (max-width: 767px ) {
    align-items: flex-end;
    right: 16px;
    padding-bottom: 32px;
    &:before {
      height: calc(100vh - 328px);
    }
    &:after {
      display: none;
    }
  }
`

const Icons = styled.ul `
  line-height: 48px;
  list-style: none;
`

const Footer = styled.div`
  width: calc(100% - 144px);
  position: absolute;
  bottom: 48px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:after { z-index: -1; }

  > span {
    margin-left: 16px;

    > a {
      color: var(--text-color);
      text-decoration: none;
      position: relative;

      &:after {
        content: '';
        height: 1px;
        background-color: var(--text-color);
        width: 0%;
        display: block;
        position: absolute;
        left: 0;
        bottom: -2px;
        transition: 200ms ease;
        z-index: -1;
      }

      &:hover {
        &:after {
          width: 100%;
        }
      }
    }
  }

  &:after {
    content: '';
    height: 2px;
    width: 264px;
    background: #f3f3f3;
    margin-left: 16px;
    border-radius: 2px
    z-index: -1;
    margin-top: 4px;
  }

  @media screen and (max-width: 767px ) {
    bottom: 16px;
    width: 100%;
    padding: 0 56px 0 16px;
  }
`

const Line = styled.span`
  border-radius: 8px;
  height: 16px;
  position: absolute;
  z-index: 3;
  width: ${({ width }) => width}px;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  right: ${({ right }) => right}%;

  &.l {
    opacity: 0;
    transform: translate3d(0, 64 px, 0);
  }

  @media screen and (max-width: 767px ) {
    height: 8px;
  }
`

const Toggle = styled.div`
  input { display: none; }

  margin-top: 8px;

  .theme-toggle-label {
    background: #1e2436;
    width: 48px;
    height: 16px;
    display: block;
    cursor: pointer;
    display: inline-block;
    position: relative;
    border-radius: 8px;
    margin-left: 16px;
    transition: all 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

    &:after {
      content: '';
      height: 100%;
      width: 50%;
      position: absolute;
      top: 0;
      left: 0;
      background: #f3f3f3;
      border-radius: 8px;
      transition: all 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
  }

  .theme-toggle-input:checked {
    + .theme-toggle-label {
      background: #fff;

      &:after {
        left: 50%;
        background: hsl(225, 29%, 26%);
      }
    }
  }

}

`

const MAX_LINE_WIDTH = (window.innerWidth > 767) ? 320 : 214
const MIN_LINE_WIDTH = window.innerWidth > 767 ? 48 : 24
const random = (num, range = 0) => (Math.random() * num) + range

class Fold extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dark: false,
      colorOptions: ['red', 'yellow', 'turq', 'blue', 'grey', 'red', 'blue', 'green'],
    }

    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  componentDidMount() {
    document.body.addEventListener('keydown', e => {
      if(e.key === 'i') {
        this.setState(({ dark }) => ({
          dark: !dark
        }), this.toggleDarkMode)
      } else if(e.key === 'r') {
        this.forceUpdate()
      }
    })

    document.querySelectorAll('.to-animate')
      .forEach((node, idx) => {
        setTimeout(() => {
          node.classList.add('fade-in-up')
          node.classList.remove('to-animate')
        }, (idx * 380) + 400)
      })

      const currentHour = new Date().getHours()
      this.setState({
        dark: !(currentHour > 6 && currentHour < 19)
      }, this.toggleDarkMode)


      setInterval(() => {
        this.forceUpdate()
      }, 5000)
  }

  toggleDarkMode(val = this.state.dark) {
    const set = (prop, val) => document.documentElement.style.setProperty(prop, val)

    if(val) {
      set(`--background-color`, '#1E2436')
      set('--text-color', '#fff')
      set('--backdrop-color', '#1D2136')
      document.body.classList.add('dark')
    } else {
      set(`--background-color`, '#fff')
      set('--text-color', '#2B334D')
      set('--backdrop-color', '#F3F3F3')
      document.body.classList.remove('dark')
    }
  }

  handleToggle = (event) => {
    this.setState({
      dark: event.target.checked
    }, this.toggleDarkMode)
  }

  render() {
    const { colorOptions, dark } = this.state
    const isSmall = num => (window.innerWidth > num)

    return (<React.Fragment>
      {isSmall(1023) && <LineNumbers>{[...Array(Math.floor(window.innerHeight / 24))].map((_, idx) => <div key={idx}>{idx + 1}</div>)}</LineNumbers>}

      <Container>
        <BackdropRectangle className="to-animate">
          <Line className={`line-${colorOptions[0]}`} width={e => random(MAX_LINE_WIDTH, MIN_LINE_WIDTH)} top={random(100)} left={'auto'} right={random(-24)}/>
          <Line className={`line-${colorOptions[1]}`} width={e => random(MAX_LINE_WIDTH, MIN_LINE_WIDTH)} top={random(100)} left='auto' right={random(-24)}/>
          <Line className={`line-${colorOptions[2]}`} width={e => random(MAX_LINE_WIDTH, MIN_LINE_WIDTH)} top={random(100)} left={random(15)} right={'auto'}/>
          <Line className={`line-${colorOptions[3]}`} width={e => random(MAX_LINE_WIDTH, MIN_LINE_WIDTH)} top={random(100)} left={random(32)} right='auto'/>
          <Line className={`line-${colorOptions[4]}`} width={e => random(MAX_LINE_WIDTH, MIN_LINE_WIDTH)} top={random(100)} left='auto' right={random(-10)}/>
          {isSmall(767) && <Line className={`line-${colorOptions[5]}`} width={e => random(MAX_LINE_WIDTH, MIN_LINE_WIDTH)} top={random(100)} left={random(-15)} right='auto'/>}
        </BackdropRectangle>

        <MainTitle className="to-animate">Hello, I'm Noud Adrichem<br/>Web developer and<br/>Student Software Engineering</MainTitle>
      </Container>

      <Social>
        <Icons>
          <li><SocialIcon light={dark} link="https://github.com/noudadrichem" name="github"/></li>
          <li><SocialIcon light={dark} link="https://codepen.io/noudadrichem" name="codepen"/></li>
          <li><SocialIcon light={dark} link="https://www.npmjs.com/~noudadrichem" name="npm"/></li>
          <li><SocialIcon light={dark} link="https://instagram.com/noudadrichem" name="instagram"/></li>
        </Icons>
      </Social>

      <Footer>
        <span><a href="https://werk.noudadrichem.com">My Work</a></span>
        <span className="light"><a href="mailto:info@noudadrichem.com">info@noudadrichem.com</a></span>
        <Toggle>
          <input className="theme-toggle-input" checked={dark} onChange={this.handleToggle} id="theme-toggle" type="checkbox"/>
          <label className="theme-toggle-label" htmlFor="theme-toggle"></label>
        </Toggle>
      </Footer>
    </React.Fragment>)
  }
}

export default Fold;
