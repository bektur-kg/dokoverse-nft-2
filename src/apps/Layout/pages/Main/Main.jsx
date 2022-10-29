import React, {useState} from 'react'
import PrivateMinting from "../../components/PrivateMiniting"
import PublicMinting from "../../components/PublicMinting"

import VideoBg from '../../../../assets/videos/videoplayback.mp4'
import {ReactComponent as Logo} from "../../../../assets/images/textLogo.svg"
import cls from './Main.module.scss'

const Main = () => {
  const [isMinting, setIsMinting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [isPublic] = useState(false)


  return (
    <div className={cls.root}>
      <video
        src={VideoBg}
        loop
        muted
        autoPlay
      />
      <span className={`${cls.mention} ${isMinting ? cls.disable : ''}`}>watch the full video</span>

      <div className="container">
        <div className={`${cls.mainWrapper} ${isMinting ? cls.active : ''}`}>
          <div className={`${cls.main} ${isMinting ? cls.disable : ''}`}>
            <Logo/>
            <button
              onClick={() => setIsMinting(true)}
            >
              Minting
            </button>
          </div>

          {
            !isPublic ? (
              <PrivateMinting
                isMinting={isMinting}
                setIsConnected={setIsConnected}
                isConnected={isConnected}
              />
            ) : (
              <PublicMinting
                isMinting={isMinting}
                setIsConnected={setIsConnected}
                isConnected={isConnected}
              />
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Main
