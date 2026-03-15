import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaTasks } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-indigo-500/20 bg-white/5 backdrop-blur-md">

      <div className="px-10 py-3 flex flex-col md:flex-row items-center md:items-start justify-between text-gray-400 gap-6">

        {/* LEFT - DESCRIPTION */}
        <div className="mt-auto text-center pt-6 flex flex-col items-center md:text-left">
          
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <FaTasks className="text-indigo-400" />
            <h3 className="text-white font-semibold text-lg">TaskManager</h3>
          </div>

         
        </div>

        {/* CENTER - COPYRIGHT */}
        <div className="mt-auto text-center pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TaskManager — All Rights Reserved
          </p>
        </div>

        {/* RIGHT - SOCIAL */}
        <div className="mt-auto text-center pt-6 flex flex-col items-center md:items-end">

          <span className="text-sm text-gray-400 mb-2">
            Connect with us
          </span>

          <div className="flex gap-4 text-lg">

            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition transform hover:scale-110"
              style={{ textShadow: "0 0 10px rgba(99,102,241,0.6)" }}
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition transform hover:scale-110"
              style={{ textShadow: "0 0 10px rgba(99,102,241,0.6)" }}
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition transform hover:scale-110"
              style={{ textShadow: "0 0 10px rgba(99,102,241,0.6)" }}
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition transform hover:scale-110"
              style={{ textShadow: "0 0 10px rgba(99,102,241,0.6)" }}
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}