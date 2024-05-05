const Footer = () => {
    return (
        <footer className='mt-24 flex h-32 flex-col items-center justify-between bg-gradient-to-b from-transparent to-primary/20'>
            <div className='p-5 text-center'>
            "Copyright © 2024 [C-Cell Custom AI Solutions]. All rights reserved. | Terms of Service | Privacy Policy | Contact Us at {' '}
                <span className='whitespace-nowrap '>
                    <a
                        href='mailto:ferjani.nader@hotmail.fr'
                        className='font-medium text-primary brightness-150 hover:underline'
                    >
                        support@cas.com
                    </a>{' '}@CAS
                </span>
            </div>
            <div className='mt-auto h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent'></div>
        </footer>
    )
}

export default Footer
