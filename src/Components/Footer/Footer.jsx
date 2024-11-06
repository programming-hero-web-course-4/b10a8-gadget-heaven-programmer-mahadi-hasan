

const Footer = () => {
    return (
        <div className="mt-28">
            <footer className="bg-base-200 text-base-content p-10">
                <div className="space-y-3 pb-8 text-center border-b-2">
                    <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                    <p className="font-medium">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className="footer mt-8 justify-center gap-x-40">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Product Support</a>
                        <a className="link link-hover">Order Tracking</a>
                        <a className="link link-hover">Shipping and Delivery</a>
                        <a className="link link-hover">Returns</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;