function Contact(){
    return(
        <>
        <div className="pt-25 min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
          <div className="max-w-3xl w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Contact <span className="text-red-500">Cineflow</span>
            </h1>   
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
              We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
            </p>
            <form className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" type="text" id="name" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" type="email" id="email" placeholder="
                    Your Email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 h-[150px]" id="message" placeholder="
                    Your Message"></textarea>
              </div>
              <button type="submit" className="w-full py-[14px] rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-[35ms] font-semibold tracking-wide">
                Send Message
              </button>
            </form>
          </div>
        </div>                                                                       
        </>
    )
}
export default Contact;