import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Odara</h3>
            <p className="text-gray-300 dark:text-gray-400">
              Your ultimate shopping companion for a seamless shopping experience.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-200">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-200">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-200">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-400">
            © {new Date().getFullYear()} Odara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
