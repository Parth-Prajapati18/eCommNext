import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types'

export { NavLink };

NavLink.PropTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink ( {children, href, exact, ...props }) {
    const {pathname} = useRouter();
    const isActive = exact ? Pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    return <Link href={href} {...props}>{children}</Link>;
    
}