import {BlackHole} from '../assets/blackhole.webm';

function AnotherHero() {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] h-full left-0 z-[1] object-cover'
        >
      <source
      src={BlackHole}
      type='video/webm'
      />
      </video>
    </div>
  )
}

export default AnotherHero
