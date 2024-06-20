const ContactForm = () => {
    return (
        <form action="" className="mb-[140px]">
            <div className="flex gap-5 mb-[40px]">
                <div className="flex flex-col justify-center items-start">
                    <label className="font-bold mb-4">Full name</label>
                    <input type="text" placeholder="Fullname" className="w-[373px] h-[50px] border border-black rounded-lg px-5 py-[19px]" />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <label className="font-bold mb-4">Email</label>
                    <input type="email" placeholder="Email" className="w-[373px] h-[50px] border border-black rounded-lg px-5 py-[19px]" />
                </div>
            </div>
            <div className="flex gap-5 mb-[40px]">
                <div className="flex flex-col justify-center items-start">
                    <label className="font-bold mb-4">Phone</label>
                    <input type="text" placeholder="Phone" className="w-[373px] h-[50px] border border-black rounded-lg px-5 py-[19px]" />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <label className="font-bold mb-4">Subject</label>
                    <input type="text" placeholder="Subject..." className="w-[373px] h-[50px] border border-black rounded-lg px-5 py-[19px]" />
                </div>
            </div>
            <div className="mb-[60px]">
                <div className="flex flex-col justify-center items-start">
                    <label className="font-bold mb-4">Subject</label>
                    <input type="text" placeholder="Subject..." className="w-[766px] h-[165px] border border-black rounded-lg px-5 py-[19px]" />
                </div>
            </div>
            <div className="flex text-start">
                <p>required</p>
                <button className="font-bold text-[14px] text-white bg-black rounded-lg px-9 py-5 mr-[110px] ml-[220px] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                    SEND MESSAGE
                </button>
                <p>Viverra at port <br /> accumsan. <span className="text-[#CD4631] hover:underline hover:cursor-pointer">Orci non</span></p>
            </div>
        </form>
    )
}

export default ContactForm;