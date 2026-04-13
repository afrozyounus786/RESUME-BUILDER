import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <>
            <style>
                {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
          *{
            font-family: "Poppins", sans-serif;
          }`
                }
            </style>

            <section className="relative flex flex-col items-center bg-black text-white text-sm pb-10 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] bg-top bg-no-repeat">
                <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur">
                    <a href="https://prebuiltui.com">
                        <svg width="155" height="40" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924m-7.196 5.32V14.56h3.08v3.612l-.532 3.276.532 3.248V33.6zm6.692-8.232q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128t.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.868.504 1.988.504M54.95 28V14.56h3.08V28zm3.08-7.476-1.064-.532q0-2.548 1.12-4.116 1.148-1.596 3.444-1.596 1.008 0 1.82.364.811.365 1.512 1.176l-2.016 2.072a2.1 2.1 0 0 0-.812-.56 3 3 0 0 0-1.036-.168q-1.287 0-2.128.812-.84.811-.84 2.548m14.156 7.756q-2.016 0-3.64-.896a7 7 0 0 1-2.548-2.52q-.924-1.596-.924-3.584t.924-3.556a6.87 6.87 0 0 1 2.492-2.52q1.596-.924 3.528-.924 1.876 0 3.304.868a6.05 6.05 0 0 1 2.268 2.38q.84 1.512.84 3.444 0 .336-.056.7a7 7 0 0 1-.112.756H67.23v-2.52h9.436l-1.148 1.008q-.056-1.232-.476-2.072a3 3 0 0 0-1.204-1.288q-.756-.448-1.876-.448-1.176 0-2.044.504a3.43 3.43 0 0 0-1.344 1.428q-.476.896-.476 2.156t.504 2.212 1.428 1.484q.924.504 2.128.504 1.037 0 1.904-.364a4 4 0 0 0 1.512-1.064l1.96 1.988a6.3 6.3 0 0 1-2.38 1.736 7.6 7.6 0 0 1-2.968.588m15.91 0q-1.54 0-2.745-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.821 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.869 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.455.924-3.276.924M80.898 28V7.84h3.08v10.024l-.532 3.248.532 3.276V28zm6.692-2.632q1.12 0 1.96-.504a3.6 3.6 0 0 0 1.344-1.456q.504-.924.504-2.128t-.504-2.128a3.43 3.43 0 0 0-1.344-1.428q-.84-.532-1.96-.532t-1.988.532a3.43 3.43 0 0 0-1.344 1.428q-.476.924-.476 2.128.001 1.204.476 2.128a3.6 3.6 0 0 0 1.344 1.456q.87.504 1.988.504m15.067 2.912q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.644.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.976-.28V14.56h3.08V28zm1.54-15.904q-.783 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.813 0 1.316.532t.504 1.316q0 .784-.504 1.316t-1.316.532M118.169 28V7.84h3.08V28zm8.552 0V8.96h3.08V28zm-3.22-10.64v-2.8h9.52v2.8zm17.274 10.92q-1.708 0-3.052-.756a5.5 5.5 0 0 1-2.072-2.072q-.728-1.344-.728-3.08V14.56h3.08v7.672q0 .98.308 1.68.336.672.952 1.036.643.364 1.512.364 1.344 0 2.044-.784.728-.812.728-2.296V14.56h3.08v7.812q0 1.764-.756 3.108a5.3 5.3 0 0 1-2.044 2.072q-1.317.728-3.052.728m8.977-.28V14.56h3.08V28zm1.54-15.904q-.785 0-1.316-.532-.504-.532-.504-1.316t.504-1.316a1.8 1.8 0 0 1 1.316-.532q.812 0 1.316.532t.504 1.316-.504 1.316-1.316.532" fill="#fff" />
                            <path d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                    <div className="hidden md:flex items-center gap-8 transition duration-500 border border-green-900 bg-green-600 px-10 py-3 rounded-full">
                        <a href="#home" className="text-sm text-green-50 hover:text-slate-300 transition">Home</a>
                        <a href="#products" className="text-sm text-green-50 hover:text-slate-300 transition">Products</a>
                        <a href="#stories" className="text-sm text-green-50 hover:text-slate-300 transition">Stories</a>
                        <a href="#pricing" className="text-sm text-green-50 hover:text-slate-300 transition">Pricing</a>
                    </div>

                    <Link
                        to="/app?state=login"
                        className="hidden md:block bg-green-600 active:scale-95 hover:bg-green-700 transition px-6 py-2 text-slate-50 rounded-full cursor-pointer"
                    >
                        Login
                    </Link>


                    <button id="open-menu" onClick={() => setMobileOpen(true)} className="md:hidden active:scale-90 transition" aria-label='Open menu'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
                    </button>
                </nav>
                {/* --------Mobile Navbar ------------ */}
                <div id="mobile-navLinks" aria-hidden={!mobileOpen} className={`fixed inset-0 z-100 bg-white/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
                    <a href="#products" onClick={() => setMobileOpen(false)}>Products</a>
                    <a href="#stories" onClick={() => setMobileOpen(false)}>Stories</a>
                    <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>

                    <button id="close-menu" onClick={() => setMobileOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex" aria-label="Close menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>

                <a href="https://prebuiltui.com" className="flex items-center gap-2 rounded-full bg-green- p-2 mt-32">
                    <span className="bg-green-600 text-xs px-3 py-1 rounded-full">
                        
                    </span>
                    <div className="flex items-center text-white-600 text-sm">
                        <span>Used by 10,000+ users</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 4 4 3.5L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    </div>
                </a>

                <h1 className="text-center text-4xl leading-tight md:text-6xl/14 mt-3 font-semibold max-w-2xl px-4">
                    Land your dream job with AI-powered resumes.
                </h1>
                <p className="text-center text-sm md:text-base/7 text-slate-200 max-w-md mt-2 px-4">
                    Create, edit and download professional resumes with AI-powered assistance.
                </p>

                <div className="flex items-center gap-4 mt-8">
                    <Link
                        to="/app?state=register"
                        className="hidden md:block bg-green-600 active:scale-95 hover:bg-green-700 transition px-6 py-2 text-slate-50 rounded-full cursor-pointer"
                    >
                        Get Started
                    </Link>
                    <button className="flex items-center gap-2 border border-green-900 hover:bg-green-950 transition rounded-full px-6 py-3 text-slate-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video size-5" aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
                        <span>Try demo</span>
                    </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mx-auto mt-10 px-4 md:px-0">
                    
                </div>
            </section>
        </>
    )
}

export default Hero