import { useState, useEffect } from 'react';
import { NavLink } from '.';
import { userService } from 'services'; 

export function Nav() {
    const [user, setUser] = useState(null);

    useEffect ( ()=> {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    if (!user) return null;

    return (
        <nav className='px-3 bg-blue-600 text-white'>
            <div className=''>
                <NavLink href='/' exact className='bg-blue-300'>Home</NavLink>
                <NavLink href='/users' className="">Users</NavLink>
                <button onClick={userService.logout} className=''>LogOut</button>
            </div>
        </nav>
    )
}

