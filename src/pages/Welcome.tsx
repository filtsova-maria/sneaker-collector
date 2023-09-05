import WelcomeImage from 'assets/welcome.svg';
import { Link } from 'wouter';

export default function Welcome() {
  return (
    <div className='grid grid-cols-[2fr_1.5fr]'>
      <img src={WelcomeImage} alt="Welcome vector art" className='px-24 py-12 justify-self-center min-w-[700px] self-center'/>
      <div className='self-center p-24'>
        <h1>Welcome to a sneaker collector</h1>
        <p className='py-6'>This tool not only lets you showcase your prized sneaker collection but also provides you with the tools to curate, organize, and catalogue your sneakers
          like never before. </p>
        <Link href="/main" className='button-primary my-8'>Start your new collection</Link>
      </div>
    </div>
  )
}