import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthConsumer } from '../../auth';
import { toast } from 'sonner';

export const ProfileDropdown = () => {
    const [{ user }, dispatch] = AuthConsumer();
    const { username } = !!user && user;

    let navigate = useNavigate();

    const onSingOut = () => {
        dispatch({ type: ACTIONS.LOGOUT })
        navigate('/login', { replace: true })
    }
    
    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <Menu as="div" className="relative ml-3">
                <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-8 w-8 rounded-full"
                            src="https://avatars.githubusercontent.com/u/55479192?v=4"
                            alt=""
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>

                            {({ active }) => (
                                <Link
                                    to={`/profile/${username}`}
                                    className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-2 text-sm text-gray-700 flex items-center gap-3')}
                                >  <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://avatars.githubusercontent.com/u/55479192?v=4"
                                        alt=""
                                    />
                                    <div className="flex flex-col p-0 m-0 relative">
                                        <span className="font-semibold m-0 p-0 absolute top-[-18px]">Profile</span>
                                        <small className='absolute top-[-4px]'>
                                            @{username}
                                        </small>

                                    </div>
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="/login"
                                    replace
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    onClick={onSingOut}
                                >
                                    Sign out
                                </Link>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>

        </>
    )
}
