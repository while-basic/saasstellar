import React from 'react'
import Drupal from '~/components/icons/drupal'
import Framer from '~/components/icons/framer'
import Joomla from '~/components/icons/joomla'
import Notion from '~/components/icons/notion'
import Sanity from '~/components/icons/sanity'
import Storyblok from '~/components/icons/storyblok'
import Strapi from '~/components/icons/strapi'
import Typedream from '~/components/icons/typedream'
import Wordpress from '~/components/icons/wordpress'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'

const Cms = () => {
    const cms = [
        {}
    ]

    return (
        <div className='mx-5'>
            <p className='mb-8 text-center text-sm font-medium text-muted-foreground'>
                ACCESS THROUGH MOBILE, TABLET, AND DESKTOP 24/7
            </p>
            <div className='mx-auto flex flex-wrap items-center justify-center gap-8 fill-foreground lg:gap-x-14'>
                {cms.map((item) => (
                    <React.Fragment key={item.name}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger
                                    aria-label={item.name}
                                    className='cursor-default'
                                >
                                    {item.component}
                                </TooltipTrigger>
                                <TooltipContent side='bottom'>
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Cms
