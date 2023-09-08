import { useForm } from '@formspree/react'
import { Loader2Icon, MoveRightIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { cn } from '~/lib/utils'

const Hero = () => {
    const [state, handleSubmit] = useForm('mjvqrzpz')

    return (
        <main className='mx-auto mt-24 flex max-w-2xl flex-col gap-6 px-5 text-center'>
            <p className='bg-gradient-to-r from-primary to-rose-600  bg-clip-text font-caveat text-2xl font-bold text-transparent'>
                Unlock Your Potential
            </p>
            <h1 className='scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                    Discover the
                </span>{' '}
                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                    Power{' '}
                </span>
                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                    of{' '}
                </span>
                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                    SaaS{' '}
                </span>
                <span className='bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl'>
                    Simplicity.
                </span>
            </h1>
            <p className='text-lg text-muted-foreground'>
                Welcome to <span className='text-primary'>SaaSStellar</span>,
                your gateway to streamlined operations, innovation, enhanced
                productivity, and limitless growth opportunities.{' '}
                <span className='hidden lg:block'>
                    Discover a brighter future with us.
                </span>
            </p>
            <form
                onSubmit={handleSubmit}
                className='mx-auto mt-8 flex w-full max-w-sm flex-col items-end space-y-2'
            >
                <div className='flex w-full max-w-sm flex-col items-start gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='email'
                    >
                        Want an early invite?
                    </Label>
                    <Input
                        required
                        type='email'
                        placeholder='Email address...'
                        name='email'
                    />
                </div>
                {!state.succeeded && (
                    <Button
                        className={cn(
                            'flex w-full justify-between',
                            state.submitting && 'justify-center'
                        )}
                        type='submit'
                        disabled={state.submitting}
                    >
                        {state.submitting && (
                            <Loader2Icon className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        {!state.submitting && 'Join the waitlist'}
                        {!state.submitting && (
                            <MoveRightIcon className='h-4 w-4' />
                        )}
                    </Button>
                )}
                {state.succeeded && (
                    <Button
                        variant={'secondary'}
                        className='pointer-events-none w-full'
                    >
                        You've successfully joined the waitlist! 🔥
                    </Button>
                )}
                {!state.succeeded && (
                    <p className='w-full text-center text-sm text-muted-foreground'>
                        Join a waitlist of 200+ members!
                    </p>
                )}
                {state.succeeded && (
                    <p className='w-full text-center text-sm text-muted-foreground'>
                        Welcome to the future of SaaS!
                    </p>
                )}
                <p className='w-full text-center text-sm text-muted-foreground'></p>
            </form>
            <span className='mx-auto h-44 w-[1px]  rounded-full  bg-gradient-to-b from-transparent to-primary'></span>
        </main>
    )
}

export default Hero
