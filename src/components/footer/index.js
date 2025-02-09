import { Mail, Phone, MapPin, Home, User, Shield, FileText } from "lucide-react"
import { Button } from "../ui/button"


 function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-5 md:py-10 mt-10">
      <div className=" mx-auto max-w-screen-xl px-4 sm:px-5 lg:px-8 ">
        <div className=" mr-5 ml-5 flex flex-col md:flex-row justify-center gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <div className="flex items-center mb-2">
              <Mail className="mr-2 h-5 w-5" />
              <a href="" className="hover:underline">
                seeit@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="mr-2 h-5 w-5" />
              <a href="" className="hover:underline">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <p>Mumbai , Maharashtra, India</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="flex-co">
              <Button variant="link" className="text-gray-600 dark:text-gray-400 hover:underline">
                <Home className="mr-2 h-5 w-5" />
                Home
              </Button>
              <Button variant="link" className="text-gray-600 dark:text-gray-400 hover:underline">
                <User className="mr-2 h-5 w-5" />
                About Us
              </Button>
              <Button variant="link" className="text-gray-600 dark:text-gray-400 hover:underline">
                <Shield className="mr-2 h-5 w-5" />
                Privacy Policy
              </Button>
              <Button variant="link" className="text-gray-600 dark:text-gray-400 hover:underline">
                <FileText className="mr-2 h-5 w-5" />
                Terms of Service
              </Button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 20h9a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2zm10-10a8 8 0 012.083 4.018C11.878 10.016 9.863 8 7.5 8a8.75 8.75 0 00-11.395 5.742M7.5 19.25l-.149-.055c-.642.83-1.631 1.472-2.75 1.472a3.75 3.75 0 01-1.948-.416 5.25 5.25 0 002.493-2.493 3.75 3.75 0 01-.416-1.948A5.25 5.25 0 005.25 12a3.75 3.75 0 01-.418-1.948 5.25 5.25 0 002.493-2.493A3.75 3.75 0 017.5 8.25z"
                  />
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 000-6.364L12 3.636l-7.682 7.682z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
       
        <div className="mt-8 text-center border-t-2 border-gray-200 pt-3">
          <p className="text-sm">© 2024 Seeit.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer