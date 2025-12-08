export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold mb-4">E-COMZ</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Curated collection of premium goods for the modern lifestyle.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-black">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-black">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-black">Sale</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-black">Help Center</a></li>
                            <li><a href="#" className="hover:text-black">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-black">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Stay in the loop</h4>
                        <div className="flex">
                            <input type="email" placeholder="Enter your email" className="block w-full rounded-l-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                            <button className="bg-black text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-gray-800">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2024 E-Comz Inc. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-black">Privacy</a>
                        <a href="#" className="hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
