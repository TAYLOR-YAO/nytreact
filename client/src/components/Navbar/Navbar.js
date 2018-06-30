import React from "react";
import "./Navbar.css"
const Navbar = () => (
    <div>
        <nav className="navbar navbar-light text-center">
            <div className="text-center icone">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPRSURBVHhe7ZbtSxRRFIeFqP+uiMj+hP6E8gVfCKJod3M1lcxd37USytQP9aE+5lJf8iUwUYNKNypNlK3Wkqb5xVnow5nm3num2LmcBx4Q53Dn3ofZ3WlQlPqhKVMIfJSO9+/BzXxDAwrRgEI0oBANKEQDCtGAQjSgEJwpSSkVDwZ8A2d68+kgERMLiLl60ATMcTFcxFqUisdmU/WgCZjjYriItSgVj82m6kETMMfFcBFrUSoem03VgyZgjovhItaiVDymm0oTGlCIBhSiAYVoQCEaUIgGFIIz2ciFq4nrlIoHA74RF8XGxAJizsUouFkTTcAcF8NFrEWpeEw3lSY0oBANKEQDCsGZbOTC1cR1SsWDAd+Ii2JjYgEx52IU3KyJJmCOi+Ei1qJUPKabShMaUIgGFKIBheBMNnLhauI6peLBgG/ERbExsYCYczEKbtZEEzDHxXARa1EqHtNNpQkNKEQDCtGAQnAmG7lwNXGdUvFgwDfiotiYWEDMuRgFN2uiCZjjYriItSgVj+mm0oQGFKIBhWhAITiTjVy4mrhOqXgw4BtxUWxMLCDmXIyCmzXRBMxxMVzEWpSKx3RTaUIDCtGAQjSgEJzJRi5cTVynVDwY8I24KDYmFhBzLkbBzZpoAua4GC5iLUrFY7qpNKEBhWhAIRpQCM5kIxeuJq5TKh4M+EZcFBsTC4g5F6PgZk00AXNcDBexFqXiMd1UmtCAQjSgEA0oBGeykQtXE9cpFQ8GfCMuio2JBcSci1FwsyaagDkuhotYi1LxmG4qTfzXgK25oWr18Dvd2g/auoaDjfJnNoiNWKMlW6xSKp6O7tHyx909urUfXB24HSxtbLFRbFxc3wra86PblIqns2fswfPlV3RrP5iYfRw8Wlhko9j48OmLoC0/MkOpeC5kiuf6JuYO6N5esLi6GfRPzbNRbLw+PLPfnLl1llLxdHRMnwgf0/ebb8t0+/Tz4+gouHLzTlB6ucmGMXFheR3fpeXzAwPHKVU0zZnBM5f7pypfv1VpC+lnZe11+F14N1jf3mUD/c21dzvBpd6JSlO2cIoSxRN+1nt6xx9UvngUcfZJKbgxPhusbe2woTgRLzd0r9LaNZynNGY0Tk8fCx/ZPJ5EXz7OP0Pnwoh4EksrG2ywPy0tb4RP3mSlNT/ShR6Uxo7mbOF0e36k3Dcxu/9saTX4sLMXpP09ER9nfCf2Tc7//mXF6wne8SD+xv9yw/f38Z13MTN4klK4gx+WpmuFxs7u0ZnO7rHtllzxEG/kvtmcLR62he95eFXBeXFuSqAodUtDwy+fFBw0dgL4vQAAAABJRU5ErkJggg==" alt="News Icone"/>
                <h1 className="text-center">New York Times Search</h1>
            </div> 
        </nav>
    </div>
);

export default Navbar;