import Image from 'next/image'

const FeaturedProjectCard = ({props}: any) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-4">
            <div className="w-[200px] sm:w-1/4 sm:flex-shrink-0">
                <Image src={props.imgUrl} height={100} width={200} className="rounded border-2 border-gray-300 hover:border-gray-400 dark:border-gray-500 dark:hover:border-gray-400 shadow-md transition duration-0.3 ease-linear hover:-translate-y-0.5" alt={props.imgAlt}/>
            </div>
            <div>
                <header className="flex items-center justify-between gap-2 font-medium leading-tight tracking-tight">
                    <h3>
                        {props.title}
                    </h3>
                    <div className="space-x-2 text-xs flex flex-row">
                        <a href={props.codeLink} target="_blank" rel="noreferrer noopener" className="hover:text-gray-600 dark:hover:text-gray-200">
                            <div className="flex flex-row items-center justify-center w-20 px-2.5 py-2 bg-white dark:bg-[#1E1E1E] rounded shadow-md">
                                <span className="mr-1.5">Code</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github h-3 w-3" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </div>
                        </a>
                        {props.liveLink !== "" && 
                            <a href={props.liveLink} target="_blank" rel="noreferrer noopener" className="hover:text-gray-600 dark:hover:text-gray-200">
                                <div className="flex flex-row items-center justify-center w-20 px-2.5 py-2 bg-white dark:bg-[#1E1E1E] rounded shadow-md">
                                    <span className="mr-1.5">Live</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right h-3 w-3" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </div>
                            </a>
                        }
                    </div>
                </header>
                <div className="mt-3 text-sm dark:text-gray-200 leading-normal">
                    {props.description}
                </div>
                <ul className="mt-3 flex flex-wrap">
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