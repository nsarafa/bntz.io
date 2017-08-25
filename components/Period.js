import React from 'react'
import Link from 'next/link'
import GSAP from 'react-gsap-enhancer'
import SimpleContainer from './common/SimpleContainer'
import SimpleNav from './common/SimpleNav'
import SimpleTitle from './common/SimpleTitle'
import SimpleBody from './common/SimpleBody'
import BackButton from '../components/common/BackButton'
import { arrowAnimation, contentAnimation } from '../utils/animations'

class Period extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'white'

    const anim1 = this.addAnimation(contentAnimation)
    const anim2 = this.addAnimation(arrowAnimation)
    anim1.eventCallback('onStart', () => {
      anim2.pause()
    })
    anim1.eventCallback('onComplete', () => {
      anim2.restart()
    })
    anim1.play()
  }
  render () {
    const { title, body } = this.props
    const colors = {
      color: 'rgba(0, 0, 0, 0.8)',
      highlightColor: '#79FFE1'
    }

    return (
      <SimpleContainer>
        <SimpleNav>
          <Link href="/">
            <a><BackButton black /></a>
          </Link>
        </SimpleNav>
        <div id="content">
          <SimpleTitle title={title} color={colors.color} highlightColor={colors.highlightColor} />
          <SimpleBody body={body} color={colors.color} highlightColor={colors.highlightColor} />
        </div>
      </SimpleContainer>
    )
  }
}

export default GSAP()(Period)
