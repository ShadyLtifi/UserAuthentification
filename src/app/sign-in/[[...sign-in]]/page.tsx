import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
  <div className='flex items-center justify-center flex-col gap-10'>
    <h1 className='text-4xl font-bold mt-20'>Please enter your details</h1>
    <SignIn />
  </div>
  );
}