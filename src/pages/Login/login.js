import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Head>
        <title>Login - Skills Careers</title>
      </Head>
      <div className="flex flex-col md:flex-row max-w-5xl w-full shadow-lg bg-white">
        {/* Left Section for Desktop */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://startupstockphotos.com/wp-content/uploads/2021/12/ssp056-2000x1333.jpg")',
          }}
        >
          <div className="flex flex-col items-start justify-end p-10 text-white h-full">
            <h1 className="text-3xl font-bold mb-2">Login</h1>
            <h2 className="text-3xl font-bold">SKILLS CAREERS</h2>
            <p className="text-md leading-relaxed mt-4">
              Welcome to Skill Careers, where finding your dream job or the
              right talent is just a click away.
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 p-6 md:p-12">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-blue-600">
              Welcome Back! Let's Get You Started.
            </h2>
            <p className="text-gray-500 mt-1 text-sm md:text-base">
              Log in to access your account and continue your career journey or
              recruitment process.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-right">
              <a
                href="#"
                className="text-blue-500 text-sm md:text-base hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>

          {/* Social Sign-In */}
          <div className="mt-6 text-center">
            <p className="text-sm md:text-base">
              Continue with Google or LinkedIn.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-4">
              <button className="w-full flex items-center justify-center px-4 py-2 border rounded-lg bg-blue-950 text-white hover:bg-gray-400">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="Google Icon"
                  className="h-5 w-5 mr-2"
                />
                Sign in with Google
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border rounded-lg bg-blue-950 text-gray-50 hover:bg-gray-400">
                <img
                  src="https://banner2.cleanpng.com/20180703/khy/kisspng-computer-icons-share-icon-5b3bc85e130539.8815264715306445740779.jpg"
                  alt="LinkedIn Icon"
                  className="h-5 w-5 mr-2"
                />
                Sign in with LinkedIn
              </button>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-sm md:text-base">
              Don't have an account?{" "}
              <Link
                href="/Register/register"
                className="text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
