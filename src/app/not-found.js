import Link from "next/link";
import Tag from "../components/Elements/Tag";

export default function NotFound() {
    return (
        <main className="my-32 w-full h-[55vh] flex justify-center font-mr">
            <div className="relative flex flex-col items-center justify-center">
                <h1 className={`inline-block text-dark 
      text-6xl font-bold w-full capitalize xl:text-8xl text-center`}>404</h1>
                <h2 className={`inline-block text-dark 
      text-5xl font-bold w-full capitalize xl:text-6xl text-center mt-4 tracking-wide leading-snug`}>Page Not Found!</h2>
                <Tag link='/' name='Go To Home' isSolid={true} className='m-12' />

            </div>
        </main>
    );
}