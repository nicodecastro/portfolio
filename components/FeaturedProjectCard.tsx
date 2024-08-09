import Link from 'next/link'

const FeaturedProjectCard = ({props}: any) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-4">
            <img src={props.imgUrl} width="200" className="object-cover rounded border-2 border-gray-300 hover:border-gray-400 dark:border-gray-500 dark:hover:border-gray-400" alt={props.imgAlt}/>
            <div>
                <Link href={props.link} target="_blank" rel="noreferrer noopener" className="hover:text-gray-700 dark:hover:text-gray-300">
                    <header className="flex items-center gap-2 font-medium">
                    <h3>
                        {props.title}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                    </header>
                </Link>
                <div className="mt-2 text-sm">
                    {props.description}
                </div>
                <ul className="mt-2 flex flex-wrap">
                    {
                        props.technologies.map((technology: String, index: any) => (
                            <li className="mr-1.5 mt-2 transition duration-0.3 ease-linear hover:-translate-y-0.5 cursor-default" key={index}>
                                <div className="flex items-center hover:font-bold bg-white dark:bg-[#1E1E1E] rounded-full shadow-md px-3 py-1 text-xs font-medium leading-5">
                                    {technology}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default FeaturedProjectCard