import { useParams } from "react-router-dom";
import { AuthConsumer } from "../../auth";
import { useState } from "react";
import { SpinnerGeneral } from "../../components/Spinner";

export const Profile = () => {
    const [{ user: { user } }] = AuthConsumer();
    const [isImageLoading, setIsImageLoading] = useState(true);

    const editInfo = () => {
        console.log('edit info');
    }


    const handleImageLoad = (e) => {
        setIsImageLoading(false);

    };


    return (

        <div className="flex font-sans mt-5 pt-5 w-[80%] m-auto">
            <div className="flex-none w-48 relative ">
                  {
                    isImageLoading && <SpinnerGeneral />
                  }
                <img
                    src="https://avatars.githubusercontent.com/u/55479192?v=4"
                    alt=""
                    className="inset-0 rounded-full object-cover"
                    loading="lazy"
                    onLoad={handleImageLoad}
                    style={{ display: isImageLoading ? "none" : "block" }}
                />
                  
                <div className="flex-auto flex w-full justify-center mt-4 absolute bottom-0">
                    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                        New Picture
                    </button>
                </div>
            </div>
            <div className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-xl uppercase  font-semibold text-slate-900">
                        {/* My Profile */}
                        {user}
                    </h1>
                    <button onClick={editInfo} className="text-2xl font-semibold text-red-700 material-symbols-outlined hover:bg-red-100 rounded-md px-1">
                        edit_note
                    </button>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 ">
                        @{user}
                    </div>
                </div>
                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="space-x-2 flex text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit culpa ex? Repellendus explicabo facere dolorem sint ex perspiciatis deserunt, officia non eius saepe quam voluptatem eveniet veniam, est velit?
                    </div>
                </div>

            </div>
        </div>
    )
}
