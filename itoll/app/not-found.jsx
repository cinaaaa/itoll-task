import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-[100vh] text-black'>
      <p className='text-xl'>Could not find requested resource</p>
      <Link href="/" className='mt-4 text-blue-700'>Return Home</Link>
    </div>
  )
}