"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Trash2, ArrowLeft } from "lucide-react";

const DeleteProject = () => {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    if (!id) return;

    const fetchProject = async () => {

      try {

        const res = await axios.get(
          `https://portfolio-server-mpeo.onrender.com/api/projects/single/${id}`
        );


        setProject(res.data.data);


      } catch (error) {

        console.log(error);

        toast.error("Failed to load project");

      }

    };


    fetchProject();


  }, [id]);





  const handleDelete = async () => {

    try {

      setLoading(true);


      const token = localStorage.getItem("accessToken");


      await axios.delete(

        `https://portfolio-server-mpeo.onrender.com/api/projects/delete/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },

          withCredentials: true,
        }

      );


      toast.success("✅ Project deleted successfully");


      setTimeout(() => {

        router.push("/dashboard/projects");

      }, 1000);



    } catch (err) {


      toast.error(
        err.response?.data?.message || "Delete failed"
      );


    } finally {

      setLoading(false);

    }

  };





  if (!project) {

    return (

      <div className="flex justify-center items-center min-h-screen">

        <span className="loading loading-spinner loading-lg"></span>

      </div>

    );

  }



  return (

    <div className="min-h-screen bg-base-200 flex items-center justify-center p-5">


      <div className="bg-base-100 rounded-xl shadow-xl w-full max-w-xl p-8">



        <div className="flex justify-center mb-5">


          <div className="bg-red-100 p-5 rounded-full">


            <Trash2 
              className="text-red-600" 
              size={50} 
            />


          </div>


        </div>





        <h2 className="text-3xl font-bold text-center text-error">

          Delete Project

        </h2>





        <p className="text-center mt-4 text-base-content/70">

          Are you sure you want to permanently delete this project?

        </p>





        <div className="bg-base-200 rounded-lg p-4 mt-6">


          <h3 className="font-bold text-xl">

            {project.title}

          </h3>



          <p className="text-sm mt-2 line-clamp-4">

            {project.description}

          </p>


        </div>





        <div className="flex gap-4 mt-8">



          <button

            onClick={() => router.back()}

            className="btn btn-outline flex-1"

          >

            <ArrowLeft size={18}/>

            Cancel

          </button>





          <button

            onClick={handleDelete}

            disabled={loading}

            className="btn btn-error flex-1"

          >


            {

              loading ? (

                <>

                  <span className="loading loading-spinner loading-sm"></span>

                  Deleting...

                </>


              ) : (


                <>

                  <Trash2 size={18}/>

                  Delete Project

                </>


              )

            }


          </button>



        </div>



      </div>



    </div>


  );

};


export default DeleteProject;