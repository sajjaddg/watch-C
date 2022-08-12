import poster from "../../assets/img/Poster1.png";
const Home = () => {
    return (
        <div className="flex px-32 py-4 ">
            <div className="flex flex-row">
                <div className="flex flex-col space-y-3">
                    <div className="bg-center bg-cover w-64 h-96" style={{ backgroundImage: `url(${poster})` }}>

                    </div>
                    <label className="font-DMSans font-bold text-xs text-[#9CA3AF]"> USA, 2016 - Current </label>
                    <h3 className="font-DMSans font-bold text-lg">Stranger Things</h3>
                    <div className="flex flex-row justify-between">
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;